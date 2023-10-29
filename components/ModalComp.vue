<template>
  <div v-if="modalOpen" id="myModal" class="modal">
    <div class="modal-content modal-overlay ">
      <div class="modal-card detail-modal">
        <div class="modal-card-delete__body px-1 md:px-6 pt-3">
          <div class="close-wrap flex justify-end border-b-4 border-black border-double mb-5">
            <div class="close" @click="toggleModal">
              &times;
            </div>
          </div>
          <div class="justify-center grid grid-cols-1 xs:grid-cols-2 gap-3 lg:gap-0">
            <div class="flex justify-center  items-start lg:items-center">
              <div :style="`background-image: url('${member.avatar}'); background-size: cover;`" class="image-user" />
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">
                {{ member.name }}
              </div>
              <div class="font-semibold text-lg mb-2">
                {{ member.position }}
              </div>
              <div class="description" v-html="member.description" />
            </div>
          </div>
          <div class="flex justify-end items-center pb-2">
            <button class="cursor pointer bg-blue-700 rounded-md " @click="toggleModal">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/store'

const modalStore = useModalStore()
const modalOpen = computed(() => modalStore.isModalOpen)
const toggleModal = modalStore.toggleModal
const member = modalStore.member
</script>

<style lang="scss" scoped>
@use "../assets/scss/modal.scss"
</style>
