<template>
  <section class="w-full flex justify-center items-center">
    <div class="w-3/4 *:py-2 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-2 text-4xl tracking-tight font-extrabold text-center text-gray-900"
      >
        {{ $t("contactUs") }}
      </h2>
      <p class="mb-2 lg:mb-4 font-light text-center text-gray-500 sm:text-xl">
        {{ $t("contactUsDescription") }}
      </p>
      <form action="#" class="space-y-8">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >{{ $t("yourEmail") }}</label
          >
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            :placeholder="$t('enterYourEmail')"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900"
            >{{ $t("subject") }}</label
          >
          <input
            type="text"
            id="subject"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            :placeholder="$t('subjectPlaceholder')"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
            >{{ $t("yourMessage") }}</label
          >
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            :placeholder="$t('yourMessagePlaceholder')"
          ></textarea>
        </div>
        <div class="flex justify-center items-center">
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            {{ $t("sendMessage") }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped></style>
