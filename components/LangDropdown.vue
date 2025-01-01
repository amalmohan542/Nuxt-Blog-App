<template>
  <div class="relative inline-block">
    <!-- Button to toggle dropdown -->
    <button
      @click="toggleDropdown"
      class="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black focus:outline-none"
    >
      {{ currentLanguageLabel }}
    </button>

    <!-- Dropdown menu -->
    <ul
      v-if="isDropdownOpen"
      class="absolute left-0 mt-2 w-15 bg-white border border-gray-300 rounded-md shadow-lg z-10"
    >
      <li
        v-for="lang in languages"
        :key="lang.code"
        @click="changeLanguage(lang.code)"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        {{ lang.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

// Reactive state
const isDropdownOpen = ref(false);

// Available languages
const languages = ref([
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
]);

// i18n instance
const { locale } = useI18n();

// Current language label
const currentLanguageLabel = computed(() => {
  const currentLang = languages.value.find(
    (lang) => lang.code === locale.value
  );
  return currentLang ? currentLang.label : "Language";
});

// Toggle dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Change language
const changeLanguage = (langCode) => {
  locale.value = langCode; // Update i18n locale
  isDropdownOpen.value = false; // Close the dropdown
};
</script>
