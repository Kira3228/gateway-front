import { defineStore } from "pinia"
import { ref } from "vue"

export const useMessageFiltersStore = defineStore(`message-filters-store`, () => {
  const categories = ref()
  const messageTypes = ref()
  const statuses = ref()
  const securityLabels = ref()
  const priority = ref<[number | undefined, number | undefined]>()
  const metadata = ref<boolean | undefined>(undefined)
  const createDateRange = ref<[string, string]>(["", ""])
  const updateDateRange = ref<[string, string]>(["", ""])

  const setPriority = (data: [number | undefined, number | undefined]) => {
    priority.value = [...data]
  }
  const setMetadataFilters = (metadataExists: boolean | undefined) => {
    metadata.value = metadataExists
  }
  const setCreateDate = (newDate: [string, string]) => {
    createDateRange.value = [...newDate]
  }
  const setUpdateDate = (newDate: [string, string]) => {
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

