import { useMessageStore } from "@/entities/message/model/use-message-store"
import { computed, ref, watch } from "vue"
import { usePresetSync } from "@/features/preset-sync/model/use-preset-sync"
import { usePresetStore } from "@/entities/preset/model/use-preset-store"
import { Option } from "@/shared-ui/src/components/Options"
import { useMessageFiltersStore } from "@/features/message-filters/model/use-message-filters-store"
import { useRouter } from "vue-router/composables"
import { TMessage } from "@/entities/message/model"

export const useMessageViewer = () => {
  const messageStore = useMessageStore()
  const presetSync = usePresetSync()
  const presetStore = usePresetStore();
  const settingsIsOpen = ref<boolean>(false);
  const exportWindowIsOpen = ref<boolean>(false);

  const router = useRouter()

  const messageFilterStore = useMessageFiltersStore()


  const currentPage = computed(() => {
    return messageStore.currentPage
  })

  const headers = computed(() => {
    return presetStore.currentPreset?.headers.filter(header => header.isVisible) || [];
  });

  const messages = computed(() => {
    return messageStore.isLoading ? [] : messageStore.messages.messages
  })

  watch(
    [() => messageStore.currentPage, () => presetSync.presetName.value,
    () => messageFilterStore.priority, () => messageFilterStore.createDateRange,
    () => messageFilterStore.updateDateRange, () => messageFilterStore.messageTypes,
    () => messageFilterStore.securityLabels, () => messageFilterStore.statuses,
    () => messageFilterStore.categories, () => messageFilterStore.metadata,],
    ([newPage, newPreset, newPriority, newCreateDateRange, newUpdateDateRange,
      newMessageTypes, newSecurityLabels, newStatuses, newCategories, newMetadata]) => {
      messageStore.getMessages({
        limit: 1,
        page: newPage,
        categories: newCategories,
        createDateRange: newCreateDateRange,
        messageTypes: newMessageTypes,
        metadata: newMetadata,
        presetName: newPreset,
        priority: newPriority,
        securityLabels: newSecurityLabels,
        statuses: newStatuses,
        updateDateRange: newUpdateDateRange
      })
    },
    {
      immediate: true
    }
  )


  const handleRowClick = (data: TMessage) => {
    router.push({
      name: `details`,
      params: {
        id: data.messageId,
      },
    });
  };

  const clickHandler = (data: Option) => {
    switch (data.to?.name) {
      case `settings`:
        settingsIsOpen.value = true
        break
      case `export`:
        exportWindowIsOpen.value = true
        break
    }
  }

  return {
    headers, clickHandler, settingsIsOpen, handleRowClick, currentPage, messages, exportWindowIsOpen
  }
}