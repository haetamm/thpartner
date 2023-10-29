import { defineStore } from 'pinia'
import type { teamData } from './../source/team'

export const useMemberStore = defineStore('member', {
  state: () => ({
    memberList: [] as teamData[]
  }),
  actions: {
    setMemberList (data: teamData[]) {
      this.memberList = data
    }
  }
})

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
    isModalOpen: false,
    member: {
      id: 0,
      name: '',
      position: '',
      description: '',
      avatar_card: '',
      avatar: ''
    }
  }),
  actions: {
    toggleModal () {
      this.isModalOpen = !this.isModalOpen
    },
    setMemberData (data: teamData) {
      this.member.id = data.id
      this.member.name = data.name
      this.member.position = data.position
      this.member.description = data.description
      this.member.avatar = data.avatar
    }
  }
})
