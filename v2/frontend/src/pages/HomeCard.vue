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
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import AuthLayout from '../components/AuthLayout.vue';

const router = useRouter();
const username = ref("");
const password = ref("");
const errorMsg = ref("");

const handleLogin = async () => {
  try {
    const response = await axios.post("/auth/login", {
      username: username.value,
      password: password.value,
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    router.push("/books");
  } catch (error) {
    errorMsg.value =
      error.response?.data?.message || "Sikertelen bejelentkezés";
    console.error(error);
  }
};
</script>

