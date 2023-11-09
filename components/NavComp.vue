import type DropdownMenuCompVue from './DropdownMenuComp.vue';
<template>
  <nav class="fixed w-full nav-background border-b-2 border-gray-300 text-gray-900 py-2 xs:py-0">
    <div class="container mx-auto flex justify-between pr-3">
      <div class="relative flex flex-1 items-center hover:text-green-500 text-white mr-5">
        <svg
          id="Layer_1"
          class=" h-[51px] w-[43px]"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="currentColor"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 40.66 62.22"
          style="enable-background:new 0 0 40.66 62.22;"
          xml:space="preserve"
        >
          <g>
            <path d="M18.42,15.76v24.19c0,0.55-0.45,1-1,1h-0.11c-0.5,0-0.91-0.41-0.91-0.91V15.76c0-0.5,0.41-0.91,0.91-0.91h0.2   C18.02,14.85,18.42,15.26,18.42,15.76z" />
            <path d="M8.31,1.39l24.19,0c0.55,0,1,0.45,1,1v0.11c0,0.5-0.41,0.91-0.91,0.91H8.31c-0.5,0-0.91-0.41-0.91-0.91V2.3   C7.39,1.8,7.8,1.39,8.31,1.39z" />
            <path d="M26.64,43.59H13.97V15.57c0-0.4-0.32-0.72-0.72-0.72h-0.59c0,0-0.72,0.31-0.81,0.71v28.58c0.08,0.04,0.1,0.13,0.1,0.13   v0.62c0,0.4,0.32,0.72,0.72,0.72h14.04c0.4,0,0.72-0.32,0.72-0.72v-0.51C27.43,43.94,27.07,43.59,26.64,43.59z" />
            <path d="M2.24,5.85h36.13c0.55,0,1,0.45,1,1v0.11c0,0.5-0.41,0.91-0.91,0.91H2.24c-0.5,0-0.91-0.41-0.91-0.91v-0.2   C1.32,6.25,1.73,5.85,2.24,5.85z" />
            <path d="M22.88,15.76v24.19c0,0.55-0.45,1-1,1h-0.11c-0.5,0-0.91-0.41-0.91-0.91V15.76c0-0.5,0.41-0.91,0.91-0.91h0.2   C22.47,14.85,22.88,15.26,22.88,15.76z" />
            <path d="M27.43,15.76v24.19c0,0.55-0.45,1-1,1h-0.11c-0.5,0-0.91-0.41-0.91-0.91V15.76c0-0.5,0.41-0.91,0.91-0.91h0.2   C27.02,14.85,27.43,15.26,27.43,15.76z" />
            <path d="M33.61,45.28L33.61,45.28L33.6,32.27c0-0.4-0.32-0.72-0.72-0.72H32.3c-0.4,0-0.72,0.32-0.72,0.72v12.34L20.54,58.27l0,0   l-0.01,0.01l0.01-0.01L9.42,44.56V12.32h22.06v5.45c0,0.4,0.32,0.72,0.72,0.72h0.51c0,0,0.79-0.41,0.69-0.84v-6.01   c0.1-0.02,0.1-0.04,0.1-0.06v-0.5c0-0.44-0.79-0.78-0.79-0.78H8.13c-0.23,0-0.44,0.11-0.57,0.28c-0.11,0.12-0.17,0.29-0.17,0.46   v34.19l0,0l11.84,14.55l0,0l1.31,1.6l1.29-1.59l0,0L33.61,45.28z" />
          </g>
        </svg>
        <a href="/" class="relative block select-none font-custom text-4xl font-norma border-b-none">
          TH
        </a>
      </div>
      <div class="flex justify-end">
        <div class="flex borderXwidth items-center">
          <NuxtLink to="/" class="lg:hover:text-green-500 py-5 md:mx-2 px-4 text-sm lg:text-base font-semibold select-none font-custom text-white cursor-pointer hidden xs:block">
            HOME
          </NuxtLink>
          <NuxtLink to="/team" class="lg:hover:text-green-500 py-5 md:mx-2 px-4 text-sm lg:text-base font-semibold select-none font-custom text-white cursor-pointer hidden xs:block">
            TEAM
          </NuxtLink>
          <NuxtLink to="/location" class="lg:hover:text-green-500 py-5 md:mx-2 px-4 text-sm lg:text-base font-semibold select-none font-custom text-white cursor-pointer hidden xs:block">
            LOCATION
          </NuxtLink>
          <NuxtLink to="/appointment" class="lg:hover:text-green-500 py-5 md:mx-2 px-4 text-sm lg:text-base font-semibold select-none font-custom text-white cursor-pointer hidden xs:block">
            APPOINTMENT
          </NuxtLink>

          <!--Toggleable Link-->
          <div class="hoverable text-white hidden xs:block">
            <NuxtLink to="/service" class=" block  py-5 md:mx-2 px-4 text-sm lg:text-base font-semibold ">
              SERVICES
            </NuxtLink>
            <div v-if="shouldShowDropdown" class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
              <DropdownMenuComp />
            </div>
          </div>
          <!-- <div class="toggleable text-white">
            <input id="toggle-one" type="checkbox" value="selected" class="toggle-input">
            <label for="toggle-one" class="block cursor-pointer py-6 px-2 lg:p-6 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom">SERVICES</label>
            <div role="toggle" class="p-6 mega-menu mb-16 xs:mb-0 shadow-xl mt-0 overflow-auto lg:overflow-hidden h-[355px] xs:h-[250px] lg:h-[330px]">
              <DropdownMenuComp />
            </div>
          </div> -->
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
