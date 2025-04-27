import { IconsFacebookIcon } from '#build/components'; import { IconsCallIcon }
from '#build/components';
<template>
  <footer class="footer-distributed border-t-2 border-white nav-background">
    <div class="footer-left select-none">
      <div
        class="flex font-custom items-center text-white hover:text-green-500 justify-center md:justify-normal"
      >
        <IconsLogoIcon class-height=" w-[60px] h-[82px]" />
        <h3
          class="text-6xl font-normal hover:text-green-500 select-none font-custom"
        >
          TH
        </h3>
      </div>

      <p class="footer-links font-sans-custom">
        <template v-for="(link, index) in navLinks.slice(0, 3)" :key="index">
          <NuxtLink
            :to="link.path"
            class="text-white hover:text-green-500 link-1 mr-2"
          >
            {{ link.label }}
          </NuxtLink>
        </template>
      </p>

      <p class="footer-company-name text-white font-sans-custom">
        TH Partner © 2023
      </p>
    </div>

    <div class="footer-center font-sans-custom text-sm">
      <div
        class="flex items-center text-white hover:text-green-500 justify-center md:justify-normal"
      >
        <IconsGlobeIcon />
        <p>
          <span>Jln. Veteran, RT/RW : 02/03, Gambir, Kecamatan Gambir</span>
          Jakarta pusat, DKI Jakarta
        </p>
      </div>

      <div
        class="text-white hover:text-green-500 font-normal mt-3 flex items-center space-x-2 justify-center md:justify-normal"
      >
        <IconsCallIcon />
        <div>
          <NuxtLink
            to="https://wa.me/622123545001"
            target="_blank"
            rel="noreferrer"
          >
            +62 21 2354 5001
          </NuxtLink>
        </div>
      </div>

      <div class="justify-center md:justify-normal flex">
        <NuxtLink
          to="mailto:support@thpartner.com"
          class="flex items-center space-x-2 text-white hover:text-green-500 font-normal mt-3"
        >
          <IconsMailIcon />
          <div><span>support@thpartner.com</span></div>
        </NuxtLink>
      </div>
    </div>

    <div class="footer-right select-none">
      <p class="footer-company-about">
        <span>About the company</span>
        We know how important it is to our Clients to be able to tap on
        professional and customized legal advice at a competitive cost. That is
        why our vision and mission has always been to continually innovate,
        minimize cost and be nimble enough to provide a tailored solution so
        that we can provide the best value for our Clients.
      </p>

      <div class="footer-icons">
        <NuxtLink
          v-for="(link, index) in socmedLinks.slice(0, 3)"
          :key="index"
          :to="link.path"
          target="_blank"
          rel="noreferrer"
          :aria-label="link.label"
        >
          <component :is="link.icon" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { navLinks, socmedLinks } from '~/utils/helper';
</script>
<style lang="scss" scoped>
@use '../assets/scss/footer.scss';
</style>
