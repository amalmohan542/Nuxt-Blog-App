<script setup lang="ts">
import { ref } from "vue";
const searchString = ref("");
</script>

<template>
  <div
    class="flex px-4 py-2 my-2 bg-white rounded-md border-2 border-gray-300 overflow-hidden max-w-md mx-auto"
  >
    <img
      class="fill-gray-50 mr-3 rotate-90 w-4"
      src="assets/images/search.svg"
      alt=""
      srcset=""
    />
    <input
      type="email"
      :placeholder="$t('searchBlog')"
      class="w-full outline-none bg-transparent text-gray-600 text-sm"
      v-model="searchString"
      @input="$emit('onSearch', searchString)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
