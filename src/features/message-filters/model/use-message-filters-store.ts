import { ref } from "vue"

export const useMessageFiltersStore = () => {
  const messageCategories = ref()
  const messageTypes = ref()
  const messageStatuses = ref()
  const securityLabels = ref()
  const priority = ref<[number | null, number | null]>([null, null])


  const setPriority = (data: [number | null, number | null]) => {
    priority.value = [...data]
  }


  return {
    priority, messageCategories, securityLabels, messageTypes, messageStatuses, setPriority
  }
}