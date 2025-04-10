<template>
  <AuthLayout>
    <h1>Regisztráció</h1>
    
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
      <router-link to="/login" class="login-link">Bejelentkezés</router-link>
    </div>
    
    <form v-else @submit.prevent="handleRegistration" class="register-form">
      <div class="form-group">
        <label for="username">Felhasználónév</label>
        <input type="text" id="username" v-model="formData.username" required />
        <span v-if="errors.username" class="error-text">{{ errors.username }}</span>
      </div>
      
      <div class="form-group">
        <label for="email">Email cím</label>
        <input type="email" id="email" v-model="formData.email" required />
        <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
      </div>
      
      <div class="form-group">
        <label for="name">Teljes név</label>
        <input type="text" id="name" v-model="formData.name" required />
        <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
      </div>
      
      <div class="form-group">
        <label for="password">Jelszó</label>
        <input type="password" id="password" v-model="formData.password" required />
        <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
      </div>
      
      <div class="form-group">
        <label for="confirmPassword">Jelszó megerősítése</label>
        <input type="password" id="confirmPassword" v-model="formData.confirmPassword" required />
        <span v-if="errors.confirmPassword" class="error-text">{{ errors.confirmPassword }}</span>
      </div>
      
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      
      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Feldolgozás...' : 'Regisztráció' }}
      </button>
      
      <div class="login-link-container">
        Már regisztráltál? <router-link to="/login">Jelentkezzen be</router-link>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import AuthLayout from '../components/AuthLayout.vue';

const router = useRouter();
const formData = reactive({
  username: '',
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
  groupName: 'USER'
});
const errors = reactive({});
const errorMessage = ref('');
const successMessage = ref('');
const isSubmitting = ref(false);

const validateForm = () => {
  let isValid = true;
  errors.username = '';
  errors.email = '';
  errors.name = '';
  errors.password = '';
  errors.confirmPassword = '';
  
  if (!formData.username || formData.username.length < 3) {
    errors.username = 'A felhasználónévnek legalább 3 karakter hosszúnak kell lennie';
    isValid = false;
  }
  
  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Érvényes email címet adjon meg';
    isValid = false;
  }
  
  if (!formData.name || formData.name.length < 2) {
    errors.name = 'Adja meg a teljes nevét';
    isValid = false;
  }
  
  if (!formData.password || formData.password.length < 6) {
    errors.password = 'A jelszónak legalább 6 karakter hosszúnak kell lennie';
    isValid = false;
  }
  
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'A jelszavak nem egyeznek';
    isValid = false;
  }
  
  return isValid;
};

const handleRegistration = async () => {
  if (!validateForm()) return;
  
  errorMessage.value = '';
  isSubmitting.value = true;
  
  try {
    const response = await axios.post('/auth/register', {
      username: formData.username,
      email: formData.email,
      name: formData.name,
      password: formData.password,
      groupName: formData.groupName
    });
    
    successMessage.value = 'Regisztráció sikeres! Kérjük, ellenőrizze az e-mail fiókját a fiók aktiválásához.';
  } catch (error) {
    console.error('Registration error:', error);
    errorMessage.value = error.response?.data?.message || 'Hiba történt a regisztráció során. Kérjük, próbálja újra később.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>