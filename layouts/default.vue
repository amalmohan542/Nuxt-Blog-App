<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <div>
    <Header/>
    <div class="container mx-auto bg-white p-4 xl:px-32 mb-8">
      <slot />
    </div>
    <Footer/>
  </div>
</template>

<style lang="css" scoped></style>
