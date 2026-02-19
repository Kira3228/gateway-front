import { AcceptedFilters } from "../types";
import { useMessageFiltersStore } from "./use-message-filters-store"

export const useAcceptFilters = () => {
  const messageFiltersStore = useMessageFiltersStore()

  const handleAcceptFilters = (data: AcceptedFilters) => {
    console.log(data, `useAcceptFilters`);

    messageFiltersStore.setPriority(data.priority)
    messageFiltersStore.setCategories(data.categories)
    messageFiltersStore.setCreateDate(data.createDateRange)
    messageFiltersStore.setUpdateDate(data.updateDateRange)
    messageFiltersStore.setTypes(data.messageTypes)
    messageFiltersStore.setStatus(data.statuses)
    messageFiltersStore.setSecurityLabel(data.securityLabels)
    messageFiltersStore.setMetadataFilters(data.metadata)
  }
  return {
    handleAcceptFilters
  }
}