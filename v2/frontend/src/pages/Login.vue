<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="handleLogin">
      <h1>Bejelentkezés</h1>
      <label for="username">Felhasználónév</label>
      <input type="text" id="username" v-model="username" />

      <label for="password">Jelszó</label>
      <input :type="isPasswordVisible ? 'text' : 'password'" id="password" v-model="password"/>
      
      <button type="submit">Bejelentkezés</button>
      <div class="register-link">
        Nincs még fiókja? <router-link to="/register">Regisztráljon</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const username = ref("");
const password = ref("");
const errorMsg = ref("");
const isPasswordVisible = ref(false);

const handleLogin = async () => {
  try {
    const response = await axios.post('/auth/login', {
      username: username.value,
      password: password.value
    });
    
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    router.push("/homecard");
  } catch (error) {
    errorMsg.value = error.response?.data?.message || "Sikertelen bejelentkezés";
    console.error(error);
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
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

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}

.register-link {
  text-align: center;
  margin-top: 1rem;
}
</style>