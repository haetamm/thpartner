<template>
  <div class="">
    <Head>
      <Title>{{ service && service.title ? `TH | ${service.title}` : '404 | Not Found' }}</Title>
      <Meta name="description" :content="service && service.title ? service.title : '404 | Not Found'" />
    </Head>
    <div class="pt-[4.5rem] md:pt-[4.3rem] pb-2 kontener mx-auto justify-center ">
      <div class=" grid md:grid-cols-2 md:flex w-full md:justify-center gap-1 my-3 md:px-4">
        <div class="h-full w-full md:w-[35%] lg:w-[30%] mt-3 px-3 md:px-0">
          <ServiceMenuComp />
        </div>
        <div class="h-full w-full md:w-[65%] lg:w-[70%] md:border-l-2 md:border-green-200 px-3 md:px-4 md:pl-4 mt-3">
          <template v-if="pending">
            <div role="status" class="w-full kontener animate-pulse">
              <div class="flex justify-center">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              </div>
              <div class="flex justify-center">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4" />
              </div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5" />
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5" />
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 mb-2.5" />
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5" />
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2.5" />
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5" />
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5" />
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 1/4" />
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5" />
              <span class="sr-only">Loading...</span>
            </div>
          </template>
          <template v-else>
            <template v-if="service.id">
              <div class="text-3xl font-bold text-center">
                {{ service.title }}
              </div>
              <p v-if="service.price" class="text-center text-lg mb-2 mt-1">
                Price: From - {{ service.price }}
              </p>
              <div class="text-lg mt-4 text-justify px-0 md:px-2" v-html="service.description" />
            </template>
            <template v-else>
              <NotFoundComp class="mt-5 mb-10" />
            </template>
          </template>
        </div>
      </div>
    </div>
    <FooterComp />
    <SidebarComp />
  </div>
</template>

<script setup>
const { slug } = useRoute().params
const url = `/api/service/${slug}`

const { data: service, pending } = useFetch(url)

</script>

<style lang="scss" scoped>
@use "~/assets/scss/service-page.scss"

</style>
