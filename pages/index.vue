<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { Post } from "../assets/types/post";
import dummyPosts from "../assets/constants/dummydata";
import {
  INITIAL_POSTS_COUNT,
  LOAD_DELAY,
  LOAD_MORE_COUNT,
} from "../assets/constants/post";

// Reactive state
const searchQuery = ref("");
const posts = ref(dummyPosts.slice(0, INITIAL_POSTS_COUNT)); // Load initial posts
const allPosts = ref(dummyPosts); // All posts
const loading = ref(false);

// Computed property for filtering posts based on search query
const filteredPosts = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return posts.value.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query)
  );
});

// Method to handle search input
const handleSearch = (searchString: string) => {
  searchQuery.value = searchString;
};

// Method to load more posts when user scrolls to the bottom
const loadMorePosts = () => {
  if (loading.value) return;
  loading.value = true;
  setTimeout(() => {
    const currentLength = posts.value.length;
    const morePosts = allPosts.value.slice(
      currentLength,
      currentLength + LOAD_MORE_COUNT
    );
    posts.value = [...posts.value, ...morePosts];
    loading.value = false;
  }, LOAD_DELAY);
};

// Intersection Observer to detect when the user has scrolled to the bottom
let observer: IntersectionObserver | null = null;

if (typeof IntersectionObserver !== "undefined") {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      loadMorePosts();
    }
  });
}

// Lifecycle hook to set up the Intersection Observer
onMounted(() => {
  const sentinel = document.querySelector("#sentinel");
  if (sentinel && observer) {
    observer.observe(sentinel);
  }
});
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
      class="flex justify-center items-center min-h-48"
    >
      <p class="text-xl font-semibold">{{ $t("sorryNoPostFound") }}</p>
    </div>

    <div id="sentinel" class="h-1"></div>

    <div v-if="loading" class="text-center my-4">
      <Loader />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
