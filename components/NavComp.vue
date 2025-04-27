<template>
  <nav
    class="fixed w-full nav-background border-b-2 border-gray-300 text-gray-900 py-2 xs:py-0 z-[1000]"
  >
    <div class="container mx-auto flex justify-between pr-3">
      <div
        class="relative flex flex-1 items-center hover:text-green-500 text-white mr-5"
      >
        <IconsLogoIcon class-height="h-[51px] w-[43px]" />
        <NuxtLink
          to="/"
          class="relative block select-none font-custom text-4xl font-norma border-b-none"
        >
          TH
        </NuxtLink>
      </div>
      <div class="flex justify-end">
        <div class="flex borderXwidth items-center">
          <template v-for="(link, index) in navLinks.slice(0, 4)" :key="index">
            <NuxtLink
              :to="link.path"
              class="lg:hover:text-green-500 py-5 md:mx-2 px-4 text-sm lg:text-base font-semibold select-none font-custom text-white cursor-pointer hidden xs:block"
            >
              {{ link.text }}
            </NuxtLink>
          </template>

          <!--Toggleable Link-->
          <div class="hoverable text-white hidden xs:block">
            <NuxtLink
              to="/service"
              class="block py-5 md:mx-2 px-4 text-sm lg:text-base font-semibold"
            >
              SERVICES
            </NuxtLink>
            <div
              v-if="shouldShowDropdown"
              class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800"
            >
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
          >
            <g data-name="Layer 2">
              <g data-name="menu-2">
                <circle cx="4" cy="12" r="1" />
                <rect width="14" height="2" x="7" y="11" rx=".94" ry=".94" />
                <rect width="18" height="2" x="3" y="16" rx=".94" ry=".94" />
                <rect width="18" height="2" x="3" y="6" rx=".94" ry=".94" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useSidebarStore } from '@/store';
import { navLinks } from '~/utils/helper';

const sidebarStore = useSidebarStore();
const toggleDropdown = sidebarStore.toggleDropdown;

const route = useRouter();
const shouldShowDropdown = ref(false);
const isServiceRoute = ref(false);

watch(route.currentRoute, () => {
  isServiceRoute.value = route.currentRoute.value.path === '/service';
});

const updateDropdown = (newPath) => {
  shouldShowDropdown.value = !(
    newPath.startsWith('/service') || newPath.startsWith('/booking')
  );
};

onMounted(() => {
  updateDropdown(route.currentRoute.value.path);
});

watch(
  () => route.currentRoute.value.path,
  (newPath) => {
    updateDropdown(newPath);
  }
);
</script>

<style lang="scss" scoped>
@use '~/assets/scss/navbar.scss';
.router-link-exact-active {
  border-bottom: 2px solid white;
}
</style>
