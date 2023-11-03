<template>
  <div class="container mx-auto w-full flex flex-wrap justify-between">
    <div class="w-full text-white mb-3">
      <h2 class="font-bold text-2xl">
        Our Services
      </h2>
      <p>Sub-hero message, not too long and not too short. Make it just right!</p>
    </div>
    <template v-for="(option, index) in options" :key="option.url">
      <ul v-if="index > 0" class="px-4 w-full xs:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
        <div class="flex items-center">
          <img :src="option.img" alt="service-icon" class="h-10 mb-3 mr-3">
          <h3 class="font-bold text-xl text-white text-bold mb-2">
            {{ option.title }}
          </h3>
        </div>
        <p class="text-gray-100 text-sm">
          {{ option.description }}
        </p>
        <div class="flex items-center py-3">
          <svg
            class="h-6 pr-3 fill-current text-blue-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
          </svg>
          <NuxtLink :to="option.url" class="text-white bold border-b-2 border-blue-300 hover:text-blue-300">
            Find out more...
          </NuxtLink>
        </div>
      </ul>
    </template>
  </div>
</template>
<script setup>
import { getData } from '~/source/link-service-detail'

const options = getData()
</script>
