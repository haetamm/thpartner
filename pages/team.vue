<template>
  <div class="background-color-custom">
    <div class="bg-white pt-[4.6rem] md:pt-[5.1rem]">
      <div class=" w-full">
        <!-- Carousel wrapper -->
        <div class=" h-56  md:h-[27rem] overflow-hidden rounded-none">
          <!-- Item 1 -->
          <div class="">
            <div class=" block w-full h-56  md:h-[27rem] team" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10 md:mt-5">
      <div class="text-2xl lg:text-5xl text-white font-bold font-custom border-b-2 border-white mb-2">
        Our Team
      </div>
    </div>
    <div class="flex justify-center mt-2 mb-10 relative background-color-custom pb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 justify-center container gap-10 px-0 xs:px-3">
        <CardMemberComp />
        <CardMemberComp />
        <CardMemberComp />
        <CardMemberComp />
      </div>
    </div>
    <FooterComp class="" />
    <SidebarComp />
  </div>
</template>

<script setup>
useHead({
  title: 'TH | Team',
  meta: [
    { name: 'description', content: 'Solid Team' }
  ]
})

</script>

<style scoped>
.team {
  background-image: url("/download.webp");
  background-size: cover;
}
</style>
