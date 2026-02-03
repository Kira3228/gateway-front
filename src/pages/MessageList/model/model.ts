import { useHeaderStore } from "@/entities/header/model/store"
import { useMessageStore } from "@/entities/message/model/use-message-store"
import { useViewMessageDetailsStore } from "@/features/viewMessageDetails"
import { storeToRefs } from "pinia"

export const useMessageTableModel = () => {
  const messageStore = useMessageStore()
  const headerStore = useHeaderStore()
  const viewMessageDetails = useViewMessageDetailsStore()

  const { headers } = storeToRefs(headerStore)
  const { messages } = storeToRefs(messageStore)
  const { isOpen, currentId } = storeToRefs(viewMessageDetails)

  const init = async (page: number) => {
    // Promise.all([messageStore.getMessages(page), headerStore.getHeaders()])
  }

  const openModal = () => {
    viewMessageDetails.openModal()
  }

  const closeModal = () => {
    viewMessageDetails.closeModal()
  }
  return {
    init,
    headers,
    messages,
    isOpen,
    openModal,
    closeModal,
    currentId,
  }
} 
