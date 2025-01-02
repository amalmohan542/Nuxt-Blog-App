<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const post = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchPost = async () => {
  try {
    const { data, status } = await useFetch(`/api/posts/${id}`, {});
    if (status.value === "success") {
      post.value = data.value;
    } else {
      error.value = "failedToLoadPost";
    }
  } catch (err) {
    error.value = "An error occurred while fetching the post.";
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPost();
});
</script>

<template>
  <div class="flex flex-col min-h-screen relative p-4 mx-auto">
    <div v-if="loading">
      <PostSkeltonLoader />
    </div>
    <div v-else-if="post" class="flex-1 overflow-y-auto">
      <h1 class="text-2xl font-bold my-6">{{ post.title }}</h1>
      <p>
        <strong>{{ $t("author") }}:</strong> {{ post.author }}
      </p>
      <p>
        <strong>{{ $t("publishedOn") }}:</strong> {{ post.publishedOn }}
      </p>
      <p class="my-5 max-h-80 overflow-auto">{{ post.content }}</p>
      <div class="w-full flex justify-end items-center">
        <nuxt-link
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          to="/"
          >{{ $t("goBack") }}</nuxt-link
        >
      </div>
    </div>
    <div v-else>
      <p class="text-xl font-semibold w-full flex justify-center items-center">
        {{ $t(error) }}
      </p>
    </div>
  </div>
</template>
