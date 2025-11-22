import { storeToRefs } from "pinia"
import { useViewMessageDetailsStore } from "./store"
import { useMessageExtStore } from "@/entities/messageExt/model/store"
import { useMessageFileStore } from "@/entities/messageFile/model/store"
import { useStatusHistoryStore } from "@/entities/statusHistory/model/store"
import { useFileOrderSwitch } from "@/features/fileOrderSwitch/model/store"

export const useViewMessageDetailsModel = () => {
  const viewMessageDetailsStore = useViewMessageDetailsStore()
  const messageExtStore = useMessageExtStore()
  const messageFileStore = useMessageFileStore()
  const historyStatusHistoryStore = useStatusHistoryStore()
  const fileOrderSwtch = useFileOrderSwitch()
  //TODO: Добавить стор со статусами

  const { isOpen, currentId, title } = storeToRefs(viewMessageDetailsStore)

  const { error: extError, isLoading: isExtLoading, messageExts: extMessage } = storeToRefs(messageExtStore)

  const { error: fileError, isLoading: isFileLoading, files: files } = storeToRefs(messageFileStore)

  const { error: historyError, isLoading: ishistoryLoading, statusHistory: statusHistory }
    = storeToRefs(historyStatusHistoryStore)

  const setCurrentId = (messageId: string) => {
    viewMessageDetailsStore.setCurrentId(messageId)
  }

  const openModal = (messageId: string) => {
    const previousId = viewMessageDetailsStore.currentId
    if (previousId !== messageId) {
      setCurrentId(messageId)
      viewMessageDetailsStore.setCurrentId(messageId)
      messageExtStore.getMessageExt(messageId)
      console.log(`Открываю модалку`);
      messageFileStore.getMessageFiles(messageId)
      historyStatusHistoryStore.getStatusHistory(messageId)
      
    }
    viewMessageDetailsStore.openModal()
  }
  //TODO: сделать очистку всех трёх стобиков
  const closeModal = () => {
    viewMessageDetailsStore.closeModal()
  }
  return {
    currentId,
    isOpen,
    openModal,
    closeModal,
    extError,
    isExtLoading,
    extMessage,
    fileError,
    isFileLoading,
    files,
    historyError,
    ishistoryLoading,
    statusHistory
  }

}