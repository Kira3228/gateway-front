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
  const messageFilterStore = useMessageFiltersStore()
  const presetSync = usePresetSync()
  const presetStore = usePresetStore();
  const router = useRouter()

  const settingsIsOpen = ref<boolean>(false);
  const drawerIsOpen = ref<boolean>(false);

  const currentPage = computed(() => {
    return messageStore.currentPage
  })

  const headers = computed(() => {
    return presetStore.currentPreset?.headers.filter(header => header.isVisible) || [];
  });

  const messages = computed(() => {
    return messageStore.isLoading ? [] : messageStore.messages.messages
  })

  const handleRowClick = (data: TMessage) => {
    router.push({
      name: `details`,
      params: {
        id: data.messageId,
      },
    });
  };

  const optionClickHandler = (data: Option) => {
    switch (data.to?.name) {
      case `settings`:
        settingsIsOpen.value = true
        break
    }
  }

  const handleFilterButtonClick = () => {
    drawerIsOpen.value = true;
  };


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



  return {
    headers,
    messages,
    currentPage,
    drawerIsOpen,
    settingsIsOpen,
    handleRowClick,
    optionClickHandler,
    handleFilterButtonClick
  }
}