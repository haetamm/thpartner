import type DropdownMenuCompVue from './DropdownMenuComp.vue';
<template>
  <nav class="fixed w-full nav-background border-b-2 border-gray-300 text-gray-900">
    <div class="container mx-auto flex justify-between">
      <div class="relative p-0.5 px-2 xs:p-2 md:px-0 font-bold flex items-center ml-0 md:ml-2 hover:text-green-500 text-white ">
        <svg
          id="Layer_1"
          class=" h-[41px] w-[33px] md:w-[40px] md:h-[62px]"
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
        <a href="#" class="relative block text-3xl md:text-5xl font-bold md:font-semibold select-none font-custom">TH</a>
      </div>
      <div class="flex justify-end">
        <div class="flex topBotomBordersOut items-center">
          <NuxtLink to="/" class="relative py-2 px-4 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom text-white cursor-pointer hidden xs:block">
            HOME
          </NuxtLink>
          <NuxtLink to="/team" class="relative py-2 px-4 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom text-white cursor-pointer hidden xs:block">
            TEAM
          </NuxtLink>
          <NuxtLink to="/location" class="relative py-2 px-4 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom text-white cursor-pointer hidden xs:block">
            LOCATION
          </NuxtLink>
          <a class="relative py-2 px-4 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom text-white cursor-pointer hidden xs:block">APPOINTMENT</a>

          <!--Toggleable Link-->
          <div class="toggleable text-white">
            <input id="toggle-one" type="checkbox" value="selected" class="toggle-input">
            <label for="toggle-one" class="block cursor-pointer py-6 px-2 lg:p-6 text-md xs:text-sm md:text-md lg:text-lg font-bold select-none font-custom">SERVICES</label>
            <div role="toggle" class="p-6 mega-menu mb-16 xs:mb-0 shadow-xl mt-0 overflow-auto lg:overflow-hidden h-[355px] xs:h-[250px] lg:h-[330px]">
              <DropdownMenuComp />
            </div>
          </div>
        </div>
        <div class="text-white flex items-center xs:hidden mx-1 xs:mx-0">
          <svg
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
import { useSidebarStore } from '@/store'

const sidebarStore = useSidebarStore()
const toggleDropdown = sidebarStore.toggleDropdown
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>

<style lang="scss">
@use "../assets/scss/navbar.scss"
</style>
