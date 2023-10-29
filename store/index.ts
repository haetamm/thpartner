import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isDropdownOpen: false
  }),
  actions: {
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen
    }
  }
})

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalOpen: false
  }),
  actions: {
    toggleModal () {
      this.isModalOpen = !this.isModalOpen
    }
  }
})
