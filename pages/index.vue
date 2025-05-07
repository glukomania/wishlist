<template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">💫 Мой Wishlist</h1>

    <form @submit.prevent="addWish" class="flex gap-2 mb-4">
      <UInput
        v-model="newWish"
        placeholder="Введите желание..."
        class="flex-1"
      />
      <UButton type="submit">Добавить</UButton>
    </form>

    <ul>
      <li v-for="(wish, index) in wishes" :key="index" class="mb-1">
        • {{ wish }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newWish = ref("");
const wishes = ref<string[]>([]);

function addWish() {
  if (newWish.value.trim()) {
    wishes.value.push(newWish.value.trim());
    newWish.value = "";
  }
}
</script>
