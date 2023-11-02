<template>
  <div class="hidden md:block py-5 font-gabarito w-full box-content">
    <div v-for="option in options" :key="option.value">
      <NuxtLink :to="option.value" class="py-4 w-full hover:text-green-700 hover:border-r-4 border-green-200">
        <button class="w-full py-4 text-start">
          {{ option.label }}
        </button>
      </NuxtLink>
    </div>
  </div>
  <div class="block md:hidden py-5 font-gabarito w-full box-content">
    <div class="text-xl font-bold mb-3 ">
      List Service :
    </div>
    <label for="underline_select" class="sr-only">Underline select</label>
    <select id="underline_select" v-model="selectedOption" class="block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" @change="handleChange">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const route = useRoute()
const selectedOption = ref(route.path)
const { push } = useRouter()

const handleChange = () => {
  if (selectedOption.value) {
    push(selectedOption.value)
  }
}

const options = [
  { value: '/service', label: 'ALL SERVICE' },
  { value: '/service/lasting-power-of-attorney', label: 'LASTING POWER OF ATTORNEY' },
  { value: '/service/letters-of-administration', label: 'LETTERS OF ADMINISTRATION' },
  { value: '/service/probate', label: 'PROBATE' },
  { value: '/service/wills', label: 'WILLS' }
]
</script>

<style scoped>
.router-link-exact-active {
  color: #008170;
  font-weight: 700;
  border-right: 4px solid #008170; /* Menambahkan border kanan sebesar 4px dengan gaya solid */
}
</style>
