<template>
  <!-- <Main v-if="user" /> -->
  <Login />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useFirebaseAuth } from "~/composables/useFirebaseAuth";
import { signInAnonymously, signOut, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

const auth = useFirebaseAuth();

const user = ref<User | null>(null);

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u;
  });
});
</script>
