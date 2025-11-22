import { useMessageFileStore } from "@/entities/messageFile/model/store"
import { storeToRefs } from "pinia"

export const useMessageFileVirtualScrollModel = () => {
  const messageFileStore = useMessageFileStore()
  const { files, isLoading, error } = storeToRefs(messageFileStore)
  return {
    files,
    isLoading,
    error
  }
} 