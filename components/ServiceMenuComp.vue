<template>
  <div class="hidden md:block py-5 font-gabarito w-full box-content">
    <div v-for="option in options" :key="option.url">
      <NuxtLink :to="option.url" class="py-4 w-full hover:text-green-700 hover:border-r-4 border-green-200">
        <button class="w-full py-4 text-start">
          {{ option.title }}
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
      <option v-for="option in options" :key="option.url" :value="option.url">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getData } from '~/source/link-service-detail'

const route = useRoute()
const selectedOption = ref(route.path)
const { push } = useRouter()

const handleChange = () => {
  if (selectedOption.value) {
    push(selectedOption.value)
  }
}

const options = getData()

</script>

<style scoped>
.router-link-exact-active {
  color: #008170;
  font-weight: 700;
  border-right: 4px solid #008170; /* Menambahkan border kanan sebesar 4px dengan gaya solid */
}
</style>
