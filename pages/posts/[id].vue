<script setup>
const { id } = useRoute().params;
import dummyPosts from "../assets/constants/dummydata";
const posts = dummyPosts || [];
const post = dummyPosts.find((post) => post.id === parseInt(id));
const { data, status, error, refresh, clear } = await useFetch("/api/modules", {
  pick: ["title"],
});
</script>

<template>
  <div v-if="post" class="container mx-auto p-4 border shadow-md rounded-md">
    <h1 class="text-xl font-bold my-6">{{ post.title }}</h1>
    <p><strong>Author:</strong> {{ post.author }}</p>
    <p><strong>Published On:</strong> {{ post.publishedOn }}</p>
    <p class="my-5 max-h-80 overflow-auto">{{ post.content }}</p>
    <div class="w-full flex justify-end items-center">
      <nuxt-link
        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        to="/"
        >{{ $t("goBack") }}</nuxt-link
      >
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped></style>
