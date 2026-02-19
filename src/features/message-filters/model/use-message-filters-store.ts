import { defineStore } from "pinia"
import { ref } from "vue"

export const useMessageFiltersStore = defineStore(`message-filters-store`, () => {
  const categories = ref()
  const messageTypes = ref()
  const statuses = ref()
  const securityLabels = ref()
  const priority = ref<[number | null, number | null]>([null, null])
  const metadata = ref<boolean | null>(null)
  const createDateRange = ref<[string | null, string | null]>([null, null])
  const updateDateRange = ref<[string | null, string | null]>([null, null])

  const setPriority = (data: [number | null, number | null]) => {
    priority.value = [...data]
  }
  const setMetadataFilters = (metadataExists: boolean | null) => {
    metadata.value = metadataExists
  }
  const setCreateDate = (newDate: [string | null, string | null]) => {
    createDateRange.value = [...newDate]
  }
  const setUpdateDate = (newDate: [string | null, string | null]) => {
    updateDateRange.value = [...newDate]
  }
  const setCategories = (newCategories: string[]) => {
    categories.value = [...newCategories]
  }
  const setTypes = (newTypes: string[]) => {
    messageTypes.value = [...newTypes]
  }
  const setStatus = (newStatuses: string[]) => {
    statuses.value = [...newStatuses]
  }
  const setSecurityLabel = (newSecurityLabel: string[]) => {
    securityLabels.value = [...newSecurityLabel]
  }

  return {
    priority,
    createDateRange,
    updateDateRange,
    messageTypes,
    securityLabels,
    statuses,
    categories,
    metadata,
    setTypes,
    setStatus,
    setPriority,
    setCreateDate,
    setCategories,
    setUpdateDate,
    setSecurityLabel,
    setMetadataFilters,
  }
})

