import { useMessageFiltersStore } from "./use-message-filters-store"

export const useAcceptFilters = () => {
  const messageFiltersStore = useMessageFiltersStore()

  const handleAcceptFilters = (data: [number | null, number | null]) => {
    messageFiltersStore.setPriority(data)
  }
  return {
    handleAcceptFilters
  }
}