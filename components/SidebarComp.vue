<template>
  <div
    v-if="dropdownOpen"
    class="w-[15rem] h-full mt-0 top-0 fixed block sm:hidden flex-shrink-0 select-none font-custom z-[8000]"
  >
    <div class="h-full nav-background">
      <div class="flex flex-col h-full overflow-y-auto shadow-2xl shadow-black">
        <div class="flex justify-between pt-4 pb-6 px-2 mx-auto w-full">
          <div
            class="flex items-center my-auto text-white hover:text-green-500"
          >
            <svg
              id="Layer_1"
              class="h-[4rem]"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="currentColor"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 40.66 62.22"
              style="enable-background: new 0 0 40.66 62.22"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M18.42,15.76v24.19c0,0.55-0.45,1-1,1h-0.11c-0.5,0-0.91-0.41-0.91-0.91V15.76c0-0.5,0.41-0.91,0.91-0.91h0.2   C18.02,14.85,18.42,15.26,18.42,15.76z"
                />
                <path
                  d="M8.31,1.39l24.19,0c0.55,0,1,0.45,1,1v0.11c0,0.5-0.41,0.91-0.91,0.91H8.31c-0.5,0-0.91-0.41-0.91-0.91V2.3   C7.39,1.8,7.8,1.39,8.31,1.39z"
                />
                <path
                  d="M26.64,43.59H13.97V15.57c0-0.4-0.32-0.72-0.72-0.72h-0.59c0,0-0.72,0.31-0.81,0.71v28.58c0.08,0.04,0.1,0.13,0.1,0.13   v0.62c0,0.4,0.32,0.72,0.72,0.72h14.04c0.4,0,0.72-0.32,0.72-0.72v-0.51C27.43,43.94,27.07,43.59,26.64,43.59z"
                />
                <path
                  d="M2.24,5.85h36.13c0.55,0,1,0.45,1,1v0.11c0,0.5-0.41,0.91-0.91,0.91H2.24c-0.5,0-0.91-0.41-0.91-0.91v-0.2   C1.32,6.25,1.73,5.85,2.24,5.85z"
                />
                <path
                  d="M22.88,15.76v24.19c0,0.55-0.45,1-1,1h-0.11c-0.5,0-0.91-0.41-0.91-0.91V15.76c0-0.5,0.41-0.91,0.91-0.91h0.2   C22.47,14.85,22.88,15.26,22.88,15.76z"
                />
                <path
                  d="M27.43,15.76v24.19c0,0.55-0.45,1-1,1h-0.11c-0.5,0-0.91-0.41-0.91-0.91V15.76c0-0.5,0.41-0.91,0.91-0.91h0.2   C27.02,14.85,27.43,15.26,27.43,15.76z"
                />
                <path
                  d="M33.61,45.28L33.61,45.28L33.6,32.27c0-0.4-0.32-0.72-0.72-0.72H32.3c-0.4,0-0.72,0.32-0.72,0.72v12.34L20.54,58.27l0,0   l-0.01,0.01l0.01-0.01L9.42,44.56V12.32h22.06v5.45c0,0.4,0.32,0.72,0.72,0.72h0.51c0,0,0.79-0.41,0.69-0.84v-6.01   c0.1-0.02,0.1-0.04,0.1-0.06v-0.5c0-0.44-0.79-0.78-0.79-0.78H8.13c-0.23,0-0.44,0.11-0.57,0.28c-0.11,0.12-0.17,0.29-0.17,0.46   v34.19l0,0l11.84,14.55l0,0l1.31,1.6l1.29-1.59l0,0L33.61,45.28z"
                />
              </g>
            </svg>
            <div class="my-1 text-5xl font-normal text-end mr-2 flex-1">TH</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            width="30"
            height="30"
            class="text-white hover:bg-green-500"
            fill="currentColor"
            @click="toggleDropdown"
          >
            <path
              d="M880 112c17.7 0 32 14.3 32 32v736c0 17.7-14.3 32-32 32H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32Zm-40 72H184v656h656V184ZM640.013 338.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"
            />
          </svg>
        </div>

        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-white py-2 px-4 w-full flex cursor-pointer"
          @click="toggleDropdown"
        >
          <div class="mr-4 flex-shrink-0 my-auto">
            <component :is="link.icon" class="h-5 w-5" />
          </div>
          <div class="flex-auto my-1 ml-2">
            <span>{{ link.text }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSidebarStore } from '@/store';
import { navLinks } from '~/utils/helper';

const sidebarStore = useSidebarStore();
const dropdownOpen = computed(() => sidebarStore.isDropdownOpen);
const toggleDropdown = sidebarStore.toggleDropdown;
</script>

<style scoped>
.router-link-exact-active {
  border-radius: 25px 0px 25px 0px;
  background-color: white;
  color: black;
  font-weight: 700;
}
</style>
