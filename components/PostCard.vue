<script setup lang="ts">
import { Post } from "../assets/types/post";
const { post } = defineProps<{ post: Post }>();

</script>

<template>
  <div class="w-full rounded-lg overflow-hidden shadow-[0px_3px_10px_-1px_rgba(59,_130,_246,_0.5)] p-4">
    <div class="mb-4">
      <h2 class="text-xl font-bold">{{ post.title }}</h2>
      <p class="text-gray-600 text-sm">
        {{ post.publishedOn }} by <span class="text-blue-500">{{ `@${post.author}` }}</span>
      </p>
    </div>
    <div class="mb-4">
      <p class="text-gray-700">
        {{
          post.content.length > 100
            ? post.content.substring(0, 100) + "..."
            : post.content
        }}
      </p>
    </div>
    <div class="text-right">
      <nuxt-link class="text-blue-500 hover:underline" :to="`/posts/${post.id}`">{{$t("readMore")}}</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
