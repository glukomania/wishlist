<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow px-6 py-10">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>
