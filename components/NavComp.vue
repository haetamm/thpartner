<template>
  <nav class="fixed w-full nav-background border-b-2 border-gray-300 text-gray-900 py-2 xs:py-0">
    <div class="container mx-auto flex justify-between pr-3">
      <div class="relative flex flex-1 items-center hover:text-green-500 text-white mr-5">
        <IconsLogoIcon class-height="h-[51px] w-[43px]" />
        <NuxtLink to="/" class="relative block select-none font-custom text-4xl font-norma border-b-none">
          TH
        </NuxtLink>
      </div>
      <div class="flex justify-end">
        <div class="flex borderXwidth items-center">
          <template v-for="(link, index) in navLinks" :key="index">
            <NuxtLink :to="link.path" class="lg:hover:text-green-500 py-5 md:mx-2 px-4 text-sm lg:text-base font-semibold select-none font-custom text-white cursor-pointer hidden xs:block">
              {{ link.text }}
            </NuxtLink>
          </template>

          <!--Toggleable Link-->
          <div class="hoverable text-white hidden xs:block">
            <NuxtLink to="/service" class=" block  py-5 md:mx-2 px-4 text-sm lg:text-base font-semibold ">
              SERVICES
            </NuxtLink>
            <div v-if="shouldShowDropdown" class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
              <DropdownMenuComp />
            </div>
          </div>
        </div>
        <div class="text-white flex items-center xs:hidden mx-1 xs:mx-0">
          <svg
            v-if="isServiceRoute"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            @click="goBack"
          >
            <path d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg
            v-else
            id="menu"
            width="40"
            class="hover:text-white"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            @click="toggleDropdown"
          ><g data-name="Layer 2"><g data-name="menu-2"><circle cx="4" cy="12" r="1" /><rect
            width="14"
            height="2"
            x="7"
            y="11"
            rx=".94"
            ry=".94"
          /><rect
            width="18"
            height="2"
            x="3"
            y="16"
            rx=".94"
            ry=".94"
          /><rect
            width="18"
            height="2"
            x="3"
            y="6"
            rx=".94"
            ry=".94"
          /></g></g></svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useSidebarStore } from '@/store'

const navLinks = [
  { path: '/', text: 'HOME' },
  { path: '/team', text: 'TEAM' },
  { path: '/location', text: 'LOCATION' },
  { path: '/appointment', text: 'APPOINTMENT' }
]

const sidebarStore = useSidebarStore()
const toggleDropdown = sidebarStore.toggleDropdown

const route = useRouter()
const shouldShowDropdown = ref(false)
const isServiceRoute = ref(false)

watch(route.currentRoute, () => {
  isServiceRoute.value = route.currentRoute.value.path === '/service'
})

const updateDropdown = (newPath) => {
  shouldShowDropdown.value = !(
    newPath.startsWith('/service') || newPath.startsWith('/booking')
  )
}

onMounted(() => {
  updateDropdown(route.currentRoute.value.path)
})

watch(
  () => route.currentRoute.value.path,
  (newPath) => {
    updateDropdown(newPath)
  }
)

const goBack = () => {
  history.back()
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/navbar.scss";
.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
