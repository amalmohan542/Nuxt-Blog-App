<template>
  <header class="shadow-sm bg-gray-50">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <nuxt-link to="/" class="font-bold">{{
        $t("blog")
      }}</nuxt-link>
      <ul class="flex justify-between items-center gap-4">
        <li>
          <nuxt-link class="font-medium" to="/contact">{{
            $t("contact")
          }}</nuxt-link>
        </li>
        <li><LangDropdown /></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
