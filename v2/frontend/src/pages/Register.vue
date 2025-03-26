<template>
  <div class="register-container">
    <form class="register-form" @submit.prevent="register">
      <h1>Regisztráció</h1>

      <label for="username">Felhasználónév</label>
      <input type="text" id="username" v-model="username" required />

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />

      <label for="password">Jelszó</label>
      <input type="password" id="password" v-model="password" required />

      <label for="confirmPassword">Jelszó megerősítés</label>
      <input
        type="password"
        id="confirmPassword"
        v-model="confirmPassword"
        required
      />

      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? "Folyamatban..." : "Regisztráció" }}
      </button>

      <div class="login-link">
        Már van fiókja? <router-link to="/login">Bejelentkezés</router-link>
      </div>
    </form>

    <div v-if="showVerificationMessage" class="verification-modal">
      <div class="verification-content">
        <h2>Regisztráció sikeres!</h2>
        <p>
          Elküldtünk egy megerősítő e-mailt a következő címre:
          <strong>{{ email }}</strong>
        </p>
        <p>Kérjük, kattintson a linkre az e-mailben a fiók aktiválásához.</p>
        <button @click="goToLogin" class="verify-button">
          Tovább a bejelentkezéshez
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const error = ref("");
const isSubmitting = ref(false);
const showVerificationMessage = ref(false);

const register = async () => {
  error.value = "";

  if (password.value !== confirmPassword.value) {
    error.value = "A jelszavak nem egyeznek";
    return;
  }

  if (password.value.length < 8) {
    error.value = "A jelszónak legalább 8 karakter hosszúnak kell lennie";
    return;
  }

  try {
    isSubmitting.value = true;

    const response = await axios.post("/auth/register", {
      username: username.value,
      email: email.value,
      password: password.value,
    });

    // Show verification message instead of alert
    showVerificationMessage.value = true;

    // Reset form
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
  } catch (err) {
    error.value =
      err.response?.data?.message ||
      "A regisztráció sikertelen. Kérjük próbálja újra.";
    console.error("Registration error:", err);
  } finally {
    isSubmitting.value = false;
  }
};

const goToLogin = () => {
  showVerificationMessage.value = false;
  router.push("/login");
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.register-form {
  width: 400px;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error-message {
  color: #f44336;
  margin-bottom: 1rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

.login-link {
  text-align: center;
  margin-top: 1rem;
}

/* Verification Modal Styles */
.verification-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.verification-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  text-align: center;
}

.verify-button {
  margin-top: 1rem;
}
</style>
