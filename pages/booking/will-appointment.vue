<template>
  <div class="font-gabarito">
    <div class="pt-[6rem] pb-10 ">
      <div class="border-b-2 py-3 container mx-auto mb-6 flex justify-center md:justify-normal">
        <div class="px-4 md:px-20 lg:px-4 mb-1">
          <p class="font-semibold text-2xl">
            Will Appointment
          </p>
          <p>Check out our availability and book the date and time that works for you</p>
        </div>
      </div>
      <div class=" justify-beetwen grid grid-cols-1 lg:flex mx-auto gap-2 px-0 xs:px-1 container">
        <div class="inline-block xs:flex w-full lg:w-[70%] justify-center space-x-0 xs:space-x-3">
          <div class="w-full inline-block xs:flex justify-center space-x-0 xs:space-x-3 space-y-3 md:space-y-0 overflow-auto">
            <div class="flex justify-center overflow-auto bg-transparent">
              <v-date-picker />
            </div>
            <div class="">
              <div class=" justify-center">
                <div class="title-time text-center xs:text-start">
                  SELECT TIME
                </div>
                <div class="text-lg xs:text-xl md:text-2xl my-3 text-center xs:text-start">
                  Thursday, 9 November
                </div>
              </div>
              <div class="flex xs:inline-block md:flex justify-center pt-[4px]">
                <div v-for="(group, groupIndex) in timeGroup" :key="'group1-' + groupIndex" class="m-0">
                  <div v-for="(time, index) in group" :key="'group1-time-' + index">
                    <div class="w-[130px] xs:w-[142px] h-[44px] bg-gray-200 border-2 border-gray-300 my-3 mx-1 flex items-center justify-center">
                      <input :id="'checkbox' + (groupIndex * 7 + index + 1)" type="checkbox" class="hidden-checkbox" :value="time">
                      <label class="checkbox-label" :for="'checkbox' + (groupIndex * 7 + index + 1)">{{ time }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[30%] mt-16 lg:mt-0 px-4 lg:px-0">
          <div class="px-4 xs:px-10 md:px-20 lg:px-4 border-2 lg:border-none py-8 lg:py-0">
            <div class="title-time hidden lg:flex justify-center lg:justify-normal">
              SERVICE DETAIL
            </div>
            <div class="flex text-xl font-bold lg:hidden justify-center lg:justify-normal">
              SERVICE DETAIL
            </div>
            <div class="text-lg my-3 border-b-2">
              <div class="leading-9 lg:leading-8 pb-3 font-normal">
                <div>Will Appointment</div>
                <div>09 Novermber 2023 at 10:00 wib</div>
                <div>Upper Cross Street</div>
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
const times = ['08:00', '9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00']
const timeGroup = []

const splitItemsIntoGroups = () => {
  const groupSize = 4 // Ukuran kelompok (7 data per kelompok)
  for (let i = 0; i < times.length; i += groupSize) {
    const group = times.slice(i, i + groupSize)
    timeGroup.push(group)
  }
}

splitItemsIntoGroups()

useHead({
  title: 'TH | Will Appointment',
  meta: [
    { name: 'Booking | Will Appointment', content: 'Booking' }
  ]
})
</script>

<style scoped>
.hidden-checkbox {
  display: none;
}

.title-time {
    text-transform: uppercase;
    font-size: 0.75rem;
    grid-area: title;
    padding-inline-end: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-weight: 700;
    letter-spacing: 0.1666666667em;
}

@media (min-width: 900px) {
  .container {
    max-width: 1050px;
  }
}
</style>
