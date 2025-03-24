<script setup>
import { onMounted, ref } from 'vue';
import { login } from '../../../backend/services/auth/auth.service';
import { useRouter } from 'vue-router';
 

const isPasswordVisible = ref(false);

const router = useRouter();

const username = ref("");
const password = ref("");

const errorMsg = ref("");


const login = async () => {
    try {
        const response = await Login(username.value, password.value);
        if (response.message) {
            errorMsg.value = response.message;
        }
        router.push("/homecard");
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <div class="login-container">
        <form class="login-form">
            <h1>Bejelentkezés</h1>
            <label for="username">Felhasználónév</label>
            <input type="text" id="username" ref="username" />

            <label for="password">Jelszó</label>
            <input :type="isPasswordVisible ? 'text' : 'password'" id="password" ref="password"/>
            
            <div class="show-password">
                <input type="checkbox" id="togglePassword" v-model="isPasswordVisible"/>
                <label for="togglePassword">Jelszó megjelenítése</label>
            </div>

            <div v-if="errorMsg" class="text-red-500 text-xs italic mb-5 mt-5">
                {{ errorMsg }}
            </div>

            <button type="submit" @click.prevent="login()">Bejelentkezés</button>
        </form>
    </div>
</template>

<style scoped>
.login-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}

.login-form {
  align-items: center;
  height: 600px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 40px;
  color: #333;
}

label {
  font-size: 30px;
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
  text-align: left;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.show-password {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #555;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #789bc0;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 30px;
  font-size: 30px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
