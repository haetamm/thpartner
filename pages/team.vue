<template>
  <div>
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
    <div class="flex justify-center mt-5">
      <div class="text-2xl lg:text-5xl font-bold font-custom border-b-2 border-black mb-2">
        Our Team
      </div>
    </div>
    <!-- <FooterComp class="" /> -->
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
