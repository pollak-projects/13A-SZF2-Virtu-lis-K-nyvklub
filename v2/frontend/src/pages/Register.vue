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
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        
        <button type="submit">Regisztráció</button>
        
        <div class="login-link">
          Már van fiókja? <router-link to="/login">Bejelentkezés</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  const router = useRouter();
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const error = ref('');
  
  const register = async () => {
    error.value = '';
    
    if (password.value !== confirmPassword.value) {
      error.value = 'A jelszavak nem egyeznek';
      return;
    }
  
    try {
      const response = await axios.post('/auth/register', {
        username: username.value,
        email: email.value,
        password: password.value
      });
      
      alert('Sikeres regisztráció! Kérjük jelentkezzen be.');
      router.push('/login');
    } catch (err) {
      error.value = err.response?.data?.message || 'A regisztráció sikertelen. Kérjük próbálja újra.';
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
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
  
  .login-link {
    text-align: center;
    margin-top: 1rem;
  }
  </style>