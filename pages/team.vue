<template>
  <div class="flex-grow background-color-custom">
    <div class="pt-[4.5rem] md:pt-[4rem]">
      <div class=" w-full">
        <div class=" h-56  md:h-[27rem] overflow-hidden rounded-none">
          <div class=" block w-full h-56  md:h-[27rem] team" />
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-10 md:mt-5">
      <div class="text-2xl lg:text-5xl text-white font-bold font-custom border-b-2 border-white mb-2">
        Our Team
      </div>
    </div>
    <div class="flex justify-center mt-4 mb-0.5 relative background-color-custom pb-0 xs:pb-4 md:pb-10">
      <div class="grid grid-cols-1 md:grid-cols-2 justify-center container gap-10 px-0 xs:px-3">
        <div v-for="t in teams" :key="t.id">
          <CardMemberComp :team="t" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMemberStore } from '~/store'

const memberStore = useMemberStore()
const { data: teams } = await useFetch('/api/team')

memberStore.setMemberList(teams._rawValue)

useHead({
  title: 'TH | Team',
  meta: [
    { name: 'description', content: 'Solid Team' }
  ]
})

</script>

<style scoped>
.team {
  background-image: url("/download.webp");
  background-size: cover;
}
</style>
