<template>
  <div class="">
    <div class="pt-[4.5rem] md:pt-[4.3rem] pb-2 kontener mx-auto justify-center ">
      <div class=" grid md:grid-cols-2 md:flex w-full md:justify-center gap-1 my-3 md:px-4">
        <div class="h-full w-full md:w-[35%] lg:w-[30%] mt-3 px-3 md:px-0">
          <ServiceMenuComp />
        </div>
        <div class="h-full w-full md:w-[65%] lg:w-[70%] md:border-l-2 md:border-green-200 px-3 md:px-4 md:pl-4 mt-3">
          <div id="controls-carousel" class="relative w-full" data-carousel="static">
            <!-- Carousel wrapper -->
            <div class="relative h-[400px] xs:h-[350px] md:h-[380px] lg:h-[350px] overflow-hidden rounded-lg ">
              <div v-for="s in services" :key="s.id">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <div class="absolute block w-full h-[400px] team text-white text-center">
                    <div class="flex justify-center mt-4">
                      <img
                        :src="s.img"
                        alt="icon-default"
                        class="h-[100px] w-[100px] md:[h-120px] md:w-[120px]"
                      >
                    </div>
                    <div class=" flex justify-center">
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
            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
          <template v-if="pending">
            <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </template>
        </div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// const { data: services, pending } = await useFetch('http://localhost:3000/api/service')
const { data: services, pending } = await useFetch('https://thnotary.netlify.app/api/service')

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})

useHead({
  title: 'TH | Services',
  meta: [
    { name: 'description', content: 'TH list service' }
  ]
})
</script>

<style lang="scss" scoped>
@use "~/assets/scss/service-page.scss"
</style>
