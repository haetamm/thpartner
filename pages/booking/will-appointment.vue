<template>
  <div class="font-gabarito">
    <div class="pt-[6rem] pb-10  justify-center grid grid-cols-1 lg:flex mx-auto gap-10 px-4 xs:px-1">
      <div class="inline-block xs:flex w-full md:w-[70%] justify-center space-x-0 xs:space-x-3">
        <div class="w-full inline-block md:flex justify-center space-x-0 md:space-x-3 space-y-3 md:space-y-0">
          <div class="flex justify-center">
            <div class="bg-transparent shadow-none" inline-datepicker data-date="" />
          </div>
          <div class="flex justify-center">
            <div class="">
              <div class="w-[142px] h-[44px] bg-gray-200 border-2 border-gray-300 mx-2 my-2 flex items-center justify-center">
                <input id="checkbox1" type="checkbox" class="hidden-checkbox">
                <label class="checkbox-label" for="checkbox1">10.00 am</label>
              </div>
              <div class="w-[142px] h-[44px] bg-gray-200 border-2 border-gray-300 mx-2 my-2 flex items-center justify-center">
                <input id="checkbox2" type="checkbox" class="hidden-checkbox">
                <label class="checkbox-label" for="checkbox2">10.00 am</label>
              </div>
              <div class="w-[142px] h-[44px] bg-gray-200 border-2 border-gray-300 mx-2 my-2 flex items-center justify-center">
                <input id="checkbox3" type="checkbox" class="hidden-checkbox">
                <label class="checkbox-label" for="checkbox3">10.00 am</label>
              </div>
              <div class="w-[142px] h-[44px] bg-gray-200 border-2 border-gray-300 mx-2 my-2 flex items-center justify-center">
                <input id="checkbox4" type="checkbox" class="hidden-checkbox">
                <label class="checkbox-label" for="checkbox4">10.00 am</label>
              </div>
            </div>
            <div class="">
              <div class="w-[142px] h-[44px] bg-gray-200 border-2 border-gray-300 mx-2 my-2 flex items-center justify-center">
                <input id="checkbox5" type="checkbox" class="hidden-checkbox">
                <label class="checkbox-label" for="checkbox5">10.00 am</label>
              </div>
              <div class="w-[142px] h-[44px] bg-gray-200 border-2 border-gray-300 mx-2 my-2 flex items-center justify-center">
                <input id="checkbox6" type="checkbox" class="hidden-checkbox">
                <label class="checkbox-label" for="checkbox6">10.00 am</label>
              </div>
              <div class="w-[142px] h-[44px] bg-gray-200 border-2 border-gray-300 mx-2 my-2 flex items-center justify-center">
                <input id="checkbox7" type="checkbox" class="hidden-checkbox">
                <label class="checkbox-label" for="checkbox7">10.00 am</label>
              </div>
              <div class="w-[142px] h-[44px] bg-gray-200 border-2 border-gray-300 mx-2 my-2 flex items-center justify-center">
                <input id="checkbox8" type="checkbox" class="hidden-checkbox">
                <label class="checkbox-label" for="checkbox8">10.00 am</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-[30%]">
        Keranjang
      </div>
    </div>
    <FooterComp />
    <SidebarComp />
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'TH | Team',
  meta: [
    { name: 'Booking | Will Appointment', content: 'Solid Team' }
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/datepicker.min.js',
      tagPosition: 'bodyOpen'
    }
  ]
})
</script>

<style scoped>
.hidden-checkbox {
  display: none;
}

</style>
