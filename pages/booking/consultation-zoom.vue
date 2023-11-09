<template>
  <div class="font-gabarito">
    <div class="pt-[6rem] pb-10 ">
      <div class="border-b-2 container mx-auto mb-6 flex justify-center md:justify-normal">
        <div class="mb-1">
          <div class="pt-2 pb-6 flex items-center w-[60px] cursor-pointer hover:text-green-600 space-x-0.5" @click="goBack">
            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true"><path fill-rule="evenodd" d="M12.2929466,3.99983983 L13.0000534,4.70694661 L7.7015668,10.0028398 L13,15.293 L12.2928932,16.0001068 L6.2895668,10.0061485 L6.2925668,10.0028398 L6.29036026,10 L12.2929466,3.99983983 Z" /></svg>
            <span class="text-xl ">
              Back
            </span>
          </div>
          <div class="font-semibold text-2xl px-3 md:px-20 lg:px-5">
            Consultation (Zoom)
          </div>
          <div class="px-3 md:px-20 lg:px-5">
            Check out our availability and book the date and time that works for you
          </div>
        </div>
      </div>
      <div class=" justify-beetwen grid grid-cols-1 lg:flex mx-auto gap-2 px-0 xs:px-1 container">
        <div class="inline-block xs:flex w-full lg:w-[70%] justify-center space-x-0 xs:space-x-3">
          <div class="w-full inline-block xs:flex justify-center space-x-0 xs:space-x-3 space-y-3 md:space-y-0 overflow-auto">
            <div class="flex justify-center overflow-auto bg-white relative">
              <v-row>
                <v-date-picker v-model="date" />
              </v-row>
            </div>
            <div>
              <div class=" justify-center">
                <div class="title-time text-center xs:text-start pt-[3px] md:pt-[16px]">
                  SELECT TIME
                </div>
                <div class="font-normal text-lg my-3 text-center xs:text-start">
                  {{ formattedDate }}
                </div>
              </div>
              <div class="flex xs:inline-block md:flex justify-center pt-[4px]">
                <div v-for="(group, groupIndex) in timeGroup" :key="'group1-' + groupIndex" class="m-0">
                  <div v-for="(time, index) in group" :key="'group1-time-' + index">
                    <div :class="['w-[130px] xs:w-[142px] h-[44px] border-2 border-gray-300 my-3 mx-1 flex items-center justify-center', { 'bg-green-700 text-white border-none': time === selectedTime }]">
                      <input :id="'checkbox' + (groupIndex * 7 + index + 1)" type="checkbox" class="hidden-checkbox" :value="time" @click="handleCheckbox(time)">
                      <label class="checkbox-label cursor-pointer" :for="'checkbox' + (groupIndex * 7 + index + 1)">{{ time }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[30%] mt-16 lg:mt-0 px-4 lg:px-0">
          <div class="px-4 xs:px-10 md:px-20 lg:px-4 border-2 lg:border-none py-5 lg:py-0">
            <div class="title-time hidden lg:flex justify-center lg:justify-normal pt-[3px] md:pt-[16px]">
              SERVICE DETAIL
            </div>
            <div class="flex text-xl font-bold lg:hidden justify-center lg:justify-normal">
              SERVICE DETAIL
            </div>
            <div class="text-lg my-3 border-b-2">
              <div class="leading-9 lg:leading-8 pb-2 font-normal">
                <div>Consultation (Zoom)</div>
                <div>{{ formattedDate }} {{ selectedTime ? `at ${selectedTime} wib` : '' }}</div>
                <div>1 hr</div>
                <div>$321</div>
              </div>
            </div>
            <button class="w-full py-2 bg-slate-300 border-none cursor-pointer rounded-md">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>

    <FooterComp />
    <SidebarComp />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const date = ref()
const formattedDate = computed(() => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  return date.value ? new Date(date.value).toLocaleString('en-EN', options) : ''
})

const selectedTime = ref('')
const handleCheckbox = (time) => {
  if (formattedDate.value) {
    selectedTime.value = time
  }
}

const times = ['08:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00']
const timeGroup = []
const splitItemsIntoGroups = () => {
  const groupSize = 4
  for (let i = 0; i < times.length; i += groupSize) {
    const group = times.slice(i, i + groupSize)
    timeGroup.push(group)
  }
}
splitItemsIntoGroups()

const goBack = () => {
  history.back()
}

useHead({
  title: 'TH | Consultation (Zoom)',
  meta: [
    { name: 'Booking | Consultation (Zoom)', content: 'Booking' }
  ]
})
</script>

<style scoped>
.hidden-checkbox {
  display: none;
}

.v-row {
  margin: -5px;
}

.title-time {
    text-transform: uppercase;
    font-size: 0.75rem;
    grid-area: title;
    padding-inline-end: 12px;
    padding-bottom: 16px;
    font-weight: 600;
    letter-spacing: 0.1666666667em;
}

@media (min-width: 900px) {
  .container {
    max-width: 1050px;
  }
}

@media (min-width: 360px) {
  .v-row {
    margin: 0;
  }
}
</style>
