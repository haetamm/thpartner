<template>
  <div class="background-color-custom">
    <div class="pt-[3.5rem] md:pt-[5.1rem] flex justify-center">
      <h1>Hallo</h1>
    </div>
    <SidebarComp />
    <FooterComp />
  </div>
</template>
<script setup>
useHead({
  title: 'TH | Services',
  meta: [
    { name: 'description', content: 'TH list service' }
  ]
})
</script>
