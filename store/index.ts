import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isDropdownOpen: false
  }),
  actions: {
    toggleDropdown () {
      // console.log('hallo')
      this.isDropdownOpen = !this.isDropdownOpen
      // console.log(this.isDropdownOpen)
    }
  }
})
