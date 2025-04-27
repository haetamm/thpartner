import { defineStore } from 'pinia';
import type { teamData } from './../source/team';

interface appointment {
  id: number;
  date: string;
  time: string;
  option: string;
}

export const useAppointment = defineStore('appointment', {
  state: () => ({
    appointment: {} as appointment
  }),
  actions: {
    setAppointment (data: appointment) {
      this.appointment = data;
    }
  }
});

export const useMemberStore = defineStore('member', {
  state: () => ({
    memberList: [] as teamData[]
  }),
  actions: {
    setMemberList (data: teamData[]) {
      this.memberList = data;
    }
  }
});

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isDropdownOpen: false
  }),
  actions: {
    toggleDropdown () {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
});

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalOpen: false,
    member: {} as teamData
  }),
  actions: {
    toggleModal () {
      this.isModalOpen = !this.isModalOpen;
    },
    setMemberData (data: teamData) {
      this.member.id = data.id;
      this.member.name = data.name;
      this.member.position = data.position;
      this.member.description = data.description;
      this.member.avatar = data.avatar;
    }
  }
});
