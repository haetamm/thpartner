<template>
  <div class="hidden md:block py-5 font-gabarito w-full box-content" role="tablist">
    <NuxtLink to="/service" class="py-4 w-full hover:text-green-700 hover:border-r-4 border-green-200 ">
      <button class="w-full py-4 text-start">
        ALL SERVICE
      </button>
    </NuxtLink>
    <NuxtLink to="/service/lasting-power-of-attorney" class="py-4 w-full hover:text-green-700 hover:border-r-4 border-green-200 ">
      <button class="w-full py-4 text-start">
        LASTING POWER OF ATTORNEY
      </button>
    </NuxtLink>
    <NuxtLink to="/service/letters-of-administration" class="py-4 w-full hover:text-green-700 hover:border-r-4 border-green-200 ">
      <button class="w-full py-4 text-start">
        LETTERS OF ADMINISTRATION
      </button>
    </NuxtLink>
    <NuxtLink to="/service/probate" class="py-4 w-full hover:text-green-700 hover:border-r-4 border-green-200 ">
      <button class="w-full py-4 text-start">
        PROBATE
      </button>
    </NuxtLink>
    <NuxtLink to="/service/wills" class="py-4 w-full hover:text-green-700 hover:border-r-4 border-green-200 ">
      <button class="w-full py-4 text-start">
        WILLS
      </button>
    </NuxtLink>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #008170;
  font-weight: 700;
  border-right: 4px solid #008170; /* Menambahkan border kanan sebesar 4px dengan gaya solid */
}
</style>
