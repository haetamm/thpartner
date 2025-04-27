<template>
  <div class="content my-0">
    <div
      class="card min-h-48 rounded-none xs:rounded-tl-md xs:rounded-tr-md lg:rounded-tl-lg lg:rounded-tr-lg"
    >
      <div
        class="firstinfo h-[190]px] xs:h-[180px] md:h-[260px] lg:h-[180px] py-2"
      >
        <img :src="team.card_avatar" width="300" height="300" alt="loh.card" />
        <div class="profileinfo">
          <p class="text-2xl font-bold">
            {{ team.name }}
          </p>
          <p class="text-lg italic">
            {{ team.position }}
          </p>
          <p class="bio text-lg">
            {{ getDescription(team.description) }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="p-1 px-6 md:px-3 shadow-custom shadow-xl bg-white justify-between flex rounded-none xs:rounded-bl-md xs:rounded-br-md lg:rounded-bl-lg lg:rounded-br-lg"
    >
      <AkLinkedinBoxFill class="w-[30px] h-[30px]" />
      <MdRoundZoomOutMap
        class="w-[30px] h-[30px] cursor-pointer"
        @click="toggleModal(team.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { AkLinkedinBoxFill, MdRoundZoomOutMap } from '@kalimahapps/vue-icons';
import { defineProps } from 'vue';
import { useModalStore, useMemberStore } from '@/store';
import { getDescription } from '~/utils/helper';

const modalStore = useModalStore();
const memberList = useMemberStore().memberList;

defineProps({
  team: {
    type: Object,
    required: true
  }
});

const toggleModal = (id) => {
  const selectedMember = memberList.find((member) => member.id === id);

  if (selectedMember) {
    const { id, name, position, description, cardAvatar, avatar } =
      selectedMember;
    modalStore.setMemberData({
      id,
      name,
      position,
      description,
      card_avatar: cardAvatar,
      avatar
    });
    modalStore.toggleModal();
  }
};
</script>

<style lang="scss" scoped>
@use '~/assets/scss/card-member.scss';
</style>
