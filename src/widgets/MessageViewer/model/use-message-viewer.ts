import { useMessageStore } from "@/entities/message/model/use-message-store"
import { computed, ref, watch } from "vue"
import { useMessageViewStore } from "./use-message-view-store"
import { usePresetSync } from "@/features/preset-sync/model/use-preset-sync"
import { usePresetStore } from "@/entities/preset/model/use-preset-store"
import { Option } from "@/shared-ui/src/components/Options"
import { useMessageFiltersStore } from "@/features/message-filters/model/use-message-filters-store"

export const useMessageViewer = () => {
  const messageStore = useMessageStore()
  const messageViewStore = useMessageViewStore()
  const presetSync = usePresetSync()
  const presetStore = usePresetStore();
  const settingsIsOpen = ref<boolean>(false);
  const messageFilterStore = useMessageFiltersStore()

  watch(
    [() => messageViewStore.currentPage,
    () => presetSync.presetName.value,
    () => messageFilterStore.priority],
    ([newPage, newPreset, newPriority]) => {
      
      console.log(123);
      messageStore.getMessages(newPage, messageViewStore.limit, newPreset)
    },
    {
      immediate: true
    }
  )

  const headers = computed(() => {
    return presetStore.currentPreset?.headers.filter(header => header.isVisible) || [];
  });

  const clickHandler = (data: Option) => {
    switch (data.to?.name) {
      case `settings`:
        settingsIsOpen.value = true
        break
    }
    console.log(data.to?.name);
  }

  return {
    headers, clickHandler, settingsIsOpen
  }
}