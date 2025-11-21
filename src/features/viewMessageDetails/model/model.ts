import { storeToRefs } from "pinia"
import { useViewMessageDetailsStore } from "./store"
import { useMessageExtStore } from "@/entities/messageExt/model/store"
import { useMessageFileStore } from "@/entities/messageFile/model/store"

export const useViewMessageDetailsModel = () => {
  const viewMessageDetailsStore = useViewMessageDetailsStore()
  const messageExtStore = useMessageExtStore()
  const messageFileStore = useMessageFileStore()
  //TODO: Добавить стор со статусами

  const { isOpen, currentId, title } = storeToRefs(viewMessageDetailsStore)

  const openModal = (messageId: string) => {
    const previousId = viewMessageDetailsStore.currentId
    if (previousId !== messageId) {

      viewMessageDetailsStore.setCurrentId(messageId)

      messageExtStore.getMessageExt(messageId)
      messageFileStore.getMessageFiles(messageId)
    }
    else {
      console.log(`ID тот же`);
    }
    viewMessageDetailsStore.openModal()
  }


  //TODO: сделать очистку всех трёх стобиков
  const closeModal = () => {
    viewMessageDetailsStore.closeModal()
  }
  return {
    isOpen,
    openModal,
    closeModal
  }

}