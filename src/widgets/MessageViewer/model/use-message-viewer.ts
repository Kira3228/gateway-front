import { useMessageStore } from "@/entities/message/model/use-message-store"
import { computed, watch } from "vue"
import { useMessageViewStore } from "./use-message-view-store"
import { usePresetSync } from "@/features/preset-sync/model/use-preset-sync"
import { usePresetStore } from "@/entities/preset/model/use-preset-store"

export const useMessageViewer = () => {
  const messageStore = useMessageStore()
  const messageViewStore = useMessageViewStore()
  const presetSync = usePresetSync()
  const presetStore = usePresetStore();


  watch([() => messageViewStore.currentPage,
  () => presetSync.presetName.value
  ], ([newPage, newPreset]) => {
    messageStore.getMessages(newPage, messageViewStore.limit, newPreset)
  },
    {
      immediate: true
    }
  )


  const headers = computed(() => {
    return presetStore.currentPreset?.headers || [];
  });

  return {
    headers
  }
}