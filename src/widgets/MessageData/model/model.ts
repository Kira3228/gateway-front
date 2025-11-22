import { useMessageExtStore } from "@/entities/messageExt/model/store"
import { storeToRefs } from "pinia"

export const useDataCardModel = () => {
  const messageExtStore = useMessageExtStore()
  const { error, isLoading, messageExts } = storeToRefs(messageExtStore)

  const init = (id: string) => {
    messageExtStore.getMessageExt(id)
  }

  return {
    error, isLoading, messageExts, init
  }
}