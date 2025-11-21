import { storeToRefs } from "pinia"
import { useViewMessageDetailsStore } from "./store"

export const useViewMessageDetailsModel = () => {
  const viewMessageDetailsStore = useViewMessageDetailsStore()

  const { isOpen, currentId, title } = storeToRefs(viewMessageDetailsStore)

  const openModal = () => {
    viewMessageDetailsStore.openModal()
  }

  const closeModel = () => {
    viewMessageDetailsStore.closeModal()
  }
  return {
    isOpen,
    openModal,
    closeModel
  }

}