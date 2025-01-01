<script lang="ts" setup>
import { Post } from "../assets/types/post";
import dummyPosts from "../assets/constants/dummydata";
import { ref, computed } from "vue";

// Reactive state
const searchQuery = ref("");
const posts = ref(dummyPosts);

// Computed property for filtering posts
const filteredPosts = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return posts.value.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
  );
});

// Method to handle search
const handleSearch = (searchString: string) => {
  searchQuery.value = searchString;
};
</script>

<template>
  <div>
    <h1 class="my-6 text-4xl text-center font-bold">
      {{ $t("homepageHeadline") }}
    </h1>

    <SearchBar @onSearch="handleSearch" />

    <p class="font-medium text-lg my-4 text-gray-500">
      {{ $t("recentPublications") }}
    </p>

    <div
      v-for="post in filteredPosts"
      :key="post.title"
      class="flex flex-col justify-center items-center mb-4"
    >
      <PostCard :post="post" />
    </div>

    <div
      v-if="filteredPosts?.length <= 0"
      class="flex justify-center items-center border shadow-md rounded-md min-h-36"
    >
      <p class="text-xl">Sorry no blogs found</p>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
