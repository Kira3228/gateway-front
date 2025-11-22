import { useMessageFileStore } from "@/entities/messageFile/model/store"
import { storeToRefs } from "pinia"

export const useMessageFileVirtualScrollModel = () => {
  const messageFileStore = useMessageFileStore()
  const { files } = storeToRefs(messageFileStore)
  return {

  }
} 