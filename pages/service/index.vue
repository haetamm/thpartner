<template>
  <div class="flex-grow">
    <div
      class="pt-[4.5rem] md:pt-[4.3rem] pb-2 kontener mx-auto justify-center"
    >
      <div
        class="grid md:grid-cols-2 md:flex w-full md:justify-center gap-1 my-3 md:px-4"
      >
        <div class="h-full w-full md:w-[35%] lg:w-[30%] mt-3 px-3 md:px-0">
          <ServiceMenuComp />
        </div>
        <div
          class="h-full w-full md:w-[65%] lg:w-[70%] md:border-l-2 md:border-green-200 px-3 md:px-4 md:pl-4 mt-3"
        >
          <div
            id="controls-carousel"
            class="relative w-full"
            data-carousel="static"
          >
            <!-- Carousel wrapper -->
            <div
              class="relative h-[400px] xs:h-[350px] md:h-[380px] lg:h-[350px] overflow-hidden rounded-lg"
            >
              <div v-for="s in services" :key="s.id">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <div
                    class="absolute block w-full h-[400px] team text-white text-center"
                  >
                    <div class="flex justify-center mt-4">
                      <img
                        :src="s.img"
                        alt="icon-default"
                        class="h-[100px] w-[100px] md:[h-120px] md:w-[120px]"
                      />
                    </div>
                    <div class="flex justify-center">
                      <div class="px-4 md:px-24">
                        <div class="text-xl my-4">
                          {{ s.title }}
                        </div>
                        <div v-html="s.description" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Slider controls -->
            <button
              type="button"
              class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
              >
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
              >
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { initCarousels } from 'flowbite';

const { data: services } = await useFetch('/api/service');

onMounted(() => {
  initCarousels();
});

useHead({
  title: 'TH | Services',
  meta: [{ name: 'description', content: 'TH list service' }]
});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/service-page.scss';
</style>
