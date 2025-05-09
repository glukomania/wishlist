<template>
  <header>
    <div class="flex justify-between items-center">
      <div class="flex items-center cursor-pointer" @click="navigateTo('/')">
        <img src="/logo.jpg" alt="logo" class="w-[50px] h-[50px]" />
        <h1 class="text-2xl font-bold text-[#BDB5D5] ml-[10px]">
          Party Planner
        </h1>
      </div>
      <div class="flex items-center">
        <div class="text-[#BDB5D5] mr-[10px]">
          {{ user?.email ?? "Guest" }}
        </div>
        <UButton class="button-user cursor-pointer" @click="logout">
          <UIcon name="i-heroicons-user" class="text-[#BDB5D5] size-[20px]" />
        </UButton>
      </div>
    </div>
  </header>
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

function logout() {
  signOut(auth);
  navigateTo("/");
}
</script>
