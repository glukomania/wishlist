<template>
  <div class="flex flex-col items-center justify-center pt-[50px]">
    <div class="grid grid-cols-2 gap-[30px]">
      <div class="card-active" @click="navigateTo('/place')">Place</div>
      <div class="card-active" @click="navigateTo('/guests')">
        List of Guests
      </div>
      <div class="card-active" @click="navigateTo('/invitation')">
        Invitation
      </div>
      <div class="card-active" @click="navigateTo('/wishlist')">Wishlist</div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
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
