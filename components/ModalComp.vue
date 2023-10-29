<template>
  <div v-if="modalOpen" id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-card detail-modal">
        <div class="modal-card-delete__body px-1 md:px-6 pt-3">
          <div class="close-wrap flex justify-end border-b-4 border-black border-double mb-5">
            <div class="close" @click="toggleModal">
              &times;
            </div>
          </div>
          <div class="inline-block justify-center xs:flex space-x-0 xs:space-x-4">
            <!-- <img src="/joel_loh.webp" alt="member" width="300" height="350"> -->
            <div style="background-image: url('/loh.webp'); background-size: cover;" class="image-user" />
            <div>
              <div class="text-3xl font-bold mb-2">
                Dennis Loh
              </div>
              <div class="font-semibold text-lg mb-2">
                Managing Director
              </div>
              <div class="description">
                <div>
                  Dennis is the founder and managing director of the firm. He has an unquenchable passion for the law that has not subsided even after more than 23 years in practice. Dennis's many years of practice has seen him argue countless cases in both the State Courts and the Supreme Court. You can rest assured that you are in good hands when you choose to tap on Dennis's expertise.
                </div>
                <div>
                  Dennis graduated with honours from the University of London and is also admitted as a barrister in the United Kingdom.
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end items-center">
            <button class="cursor pointer bg-blue-700 rounded-sm " @click="toggleModal">
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
</script>

<style lang="scss" scoped>
@use "../assets/scss/modal.scss"
</style>
