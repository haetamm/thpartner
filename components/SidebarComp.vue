<template>
  <div v-if="dropdownOpen" class="w-[15rem] h-full mt-0  top-0 fixed block sm:hidden flex-shrink-0 select-none font-custom">
    <div class="h-full nav-background">
      <div class="flex flex-col h-full overflow-y-auto shadow-2xl shadow-black">
        <div class=" flex justify-between pt-4 pb-6 px-2 mx-auto w-full">
          <div class="flex items-center my-auto text-white hover:text-green-500">
            <svg
              id="Layer_1"
              class="h-[4rem] "
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
            <div class=" my-1 text-5xl font-normal text-end mr-2 flex-1">
              TH
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            width="30"
            height="30"
            class="text-white hover:bg-green-500"
            fill="currentColor"
            @click="toggleDropdown"
          ><path d="M880 112c17.7 0 32 14.3 32 32v736c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32Zm-40 72H184v656h656V184ZM640.013 338.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" /></svg>
        </div>

        <NuxtLink to="/" class="text-white py-2 px-4 w-full flex cursor-pointer" @click="toggleDropdown">
          <div class="mr-4 flex-shrink-0 my-auto">
            <svg class="fill-current w-5 h-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <div class="flex-auto my-1 ml-2">
            <span>HOME</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/team" class="text-white py-2 px-4 w-full flex cursor-pointer" @click="toggleDropdown">
          <div class="mr-4 flex-shrink-0 my-auto">
            <svg class="h-5 w-5" fill="none" focusable="false" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="flex-auto my-1 ml-2">
            <span>TEAM</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/location" class="text-white py-2 px-4 w-full flex cursor-pointer" @click="toggleDropdown">
          <div class="mr-4 flex-shrink-0 my-auto">
            <svg class="fill-current h-5 w-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
              />
            </svg>
          </div>
          <div class="flex-auto my-1 ml-2">
            <span>LOCATION</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/service" class="text-white py-2 px-4 w-full flex cursor-pointer" @click="toggleDropdown">
          <div class="mr-4 flex-shrink-0 my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 1024 1024"
              version="1.1"
            ><path d="M182.87 146.29h585.14v292.57h73.14V73.14H109.72v877.72h402.29v-73.15H182.87z" fill="currentColor" /><path d="M713.14 481.52L512 582.1v88.24c0 110.29 62.31 211.11 160.95 260.43l40.19 20.09 40.19-20.09c98.64-49.32 160.95-150.14 160.95-260.43V582.1L713.14 481.52z m128 188.81c0 83.12-46.18 157.84-120.52 195.01l-7.48 3.74-7.48-3.74c-74.34-37.17-120.52-111.9-120.52-195.01V627.3l128-64 128 64v43.03z" fill="currentColor" /><path d="M657.87 683.21l-36.33 41.11 93.25 82.43 113.93-131.09-41.39-36L709.69 729zM256 256h438.86v73.14H256zM256 438.86h292.57V512H256zM256 621.71h146.29v73.14H256z" fill="currentColor" /></svg>
          </div>
          <div class="flex-auto my-1 ml-2">
            <span>SERVICES</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/appointment" class="text-white py-2 px-4 w-full flex mb-1 cursor-pointer" @click="toggleDropdown">
          <div class="mr-4 flex-shrink-0 my-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 16 16">
              <path d="m 6.5 0 c -3.578125 0 -6.5 2.921875 -6.5 6.5 s 2.921875 6.5 6.5 6.5 c 0.167969 0 0.335938 -0.007812 0.5 -0.019531 v -2.007813 c -0.164062 0.019532 -0.332031 0.027344 -0.5 0.027344 c -2.496094 0 -4.5 -2.003906 -4.5 -4.5 s 2.003906 -4.5 4.5 -4.5 s 4.5 2.003906 4.5 4.5 c 0 0.167969 -0.007812 0.335938 -0.027344 0.5 h 2.007813 c 0.011719 -0.164062 0.019531 -0.332031 0.019531 -0.5 c 0 -3.578125 -2.921875 -6.5 -6.5 -6.5 z m 0 3 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 2.5 h -1.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -3 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 4.5 5 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m 0 0" fill="currentColor" />
            </svg>
          </div>
          <div class="flex-auto my-1 ml-2">
            <span>APPOINTMENT</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSidebarStore } from '@/store'

const sidebarStore = useSidebarStore()
const dropdownOpen = computed(() => sidebarStore.isDropdownOpen)
const toggleDropdown = sidebarStore.toggleDropdown
</script>
<style scoped>
.router-link-exact-active {
  border-radius: 25px 0px 25px 0px;
  background-color: white;
  color: black;
  font-weight: 700;
}
</style>
