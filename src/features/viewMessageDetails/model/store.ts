import { defineStore } from "pinia"

interface IViewMessageDetails {
  isOpen: boolean
  currentId: string
  title: string
}
export const useViewMessageDetailsStore = defineStore(`view-message-details-store`, {
  state: (): IViewMessageDetails => ({
    currentId: '',
    isOpen: false,
    title: ''
  }),
  actions: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false
    }
  }
})







