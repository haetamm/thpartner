<template>
  <div className="min-h-screen flex flex-col">
    <NavComp />
    <slot />
    <SidebarComp />
    <ModalComp />
    <FooterComp v-if="!hideFooter" />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const hideFooter = computed(() => route.path === '/location')
</script>
