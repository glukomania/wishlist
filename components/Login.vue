<template>
  <div class="min-h-screen flex items-center justify-center bg-[#BDB5D5]">
    <div class="p-6 max-w-xl w-full flex flex-col gap-4 items-center">
      <h1 class="text-2xl font-bold mb-4 text-[#ffffff]">Login</h1>
      <div class="flex flex-col gap-4">
        <input
          v-model="email"
          placeholder="Email"
          type="email"
          class="input-active"
        />
        <input
          v-model="password"
          placeholder="Password"
          type="password"
          class="input-active"
        />
        <div class="flex gap-[10px]">
          <UButton
            @click="login"
            :loading="loading"
            class="button-active flex-1"
            >Sign in</UButton
          >
          <UButton
            @click="register"
            :loading="loading"
            variant="soft"
            class="button-active flex-1"
            >Sign up</UButton
          >
        </div>
        <UAlert v-if="error" color="red" :title="error" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { auth } from "~/composables/useFirebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

async function login() {
  if (!email.value || !password.value) {
    error.value = "Please enter email and password";
    return;
  }

  loading.value = true;
  error.value = "";

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    await new Promise((resolve) => {
      const unsub = onAuthStateChanged(auth, (u) => {
        if (u) {
          unsub();
          resolve(u);
        }
      });
    });

    await navigateTo("/main");
  } catch (e: any) {
    console.error("Login error:", e);
    switch (e.code) {
      case "auth/invalid-email":
        error.value = "Invalid email";
        break;
      case "auth/user-disabled":
        error.value = "User is disabled";
        break;
      case "auth/user-not-found":
      case "auth/wrong-password":
        error.value = "Invalid email or password";
        break;
      default:
        error.value = "An error occurred while logging in";
    }
  } finally {
    loading.value = false;
  }
}

async function register() {
  if (!email.value || !password.value) {
    error.value = "Please enter email and password";
    return;
  }

  if (password.value.length < 6) {
    error.value = "Password must be at least 6 characters long";
    return;
  }

  loading.value = true;
  error.value = "";

  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
  } catch (e: any) {
    switch (e.code) {
      case "auth/email-already-in-use":
        error.value = "This email is already in use";
        break;
      case "auth/invalid-email":
        error.value = "Invalid email";
        break;
      case "auth/operation-not-allowed":
        error.value = "Registration is disabled";
        break;
      case "auth/weak-password":
        error.value = "Password is too weak";
        break;
      default:
        error.value = "An error occurred while registering";
    }
  } finally {
    loading.value = false;
  }
}
</script>
