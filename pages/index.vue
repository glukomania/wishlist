<template>
  <AuthPanel />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "empty",
});

import { ref } from "vue";
import AuthPanel from "~/components/AuthPanel.vue";
const newWish = ref("");
const wishes = ref<string[]>([]);

function addWish() {
  if (newWish.value.trim()) {
    wishes.value.push(newWish.value.trim());
    newWish.value = "";
  }
}
</script>
