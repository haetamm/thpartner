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
  <div class="inline-block md:hidden py-5 font-gabarito w-full xs:flex justify-between items-center box-content">
    <label for="services" class="block mb-2 xs:mb-0 text-gray-900 dark:text-white text-lg w-full xs:w-1/3">List Service :</label>
    <select id="services" v-model="selectedOption" class="bg-white border-b-2 border-gray-300 text-gray-900 text-sm outline-none focus:none  block w-full xs:1/7 px-0 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" @change="handleChange">
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
  border-right: 4px solid #008170;
}
</style>
