<template>
  <AuthLayout>
    <h1>Bejelentkezés</h1>
    <div class="form-group">
      <label for="username">Felhasználónév</label>
      <input type="text" id="username" v-model="username" required />
    </div>

    <div class="form-group">
      <label for="password">Jelszó</label>
      <input type="password" id="password" v-model="password" required />
    </div>

    <div v-if="errorMsg" class="error-message">
      {{ errorMsg }}
    </div>

    <button @click="handleLogin" type="button">Bejelentkezés</button>

    <div class="register-link">
      Nincs még fiókja?
      <router-link to="/register">Regisztráljon itt</router-link>
    </div>
  </AuthLayout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import AuthLayout from '../components/AuthLayout.vue';

const router = useRouter();
const username = ref("");
const password = ref("");
const errorMsg = ref("");

const handleLogin = async () => {
  if (!username.value || !password.value) {
    errorMsg.value = "Kérjük adja meg a felhasználónevet és jelszót";
    return;
  }

  try {
    const response = await axios.post("/auth/login", {
      username: username.value,
      password: password.value,
    });

    if (response.data && response.data.access_token) {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("refresh_token", response.data.refresh_token);
      localStorage.setItem("user_id", response.data.user_id);
    
      router.push("/books");
    } else {
      errorMsg.value = "Érvénytelen bejelentkezési adatok";
    }
  } catch (error) {
    if (error.response) {
      errorMsg.value = error.response.data.message || "Sikertelen bejelentkezés";
    } else {
      errorMsg.value = "Hálózati hiba történt";
    }
  }
};
</script>

