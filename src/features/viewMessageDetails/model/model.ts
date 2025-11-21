import { storeToRefs } from "pinia"
import { useViewMessageDetailsStore } from "./store"

export const useViewMessageDetailsModel = () => {
  const viewMessageDetailsStore = useViewMessageDetailsStore()

  const { isOpen, currentId, title } = storeToRefs(viewMessageDetailsStore)

  const openModal = () => {
    viewMessageDetailsStore.openModal()
  }

  const closeModal = () => {
    viewMessageDetailsStore.closeModal()
  }
  return {
    isOpen,
    openModal,
    closeModal
  }

}