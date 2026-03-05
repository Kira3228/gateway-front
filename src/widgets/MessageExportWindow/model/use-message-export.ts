import { useMessageStore } from "@/entities/message/model"
import { useMessageExportStore } from "./use-message-export-store"
import { useMessageFiltersStore } from "@/features/message-filters/model/use-message-filters-store"
import { usePresetStore } from "@/entities/preset/model/use-preset-store"

export const useMessageExport = () => {
  const { getReport } = useMessageStore()
  const messageExport = useMessageExportStore()
  const messageFilters = useMessageFiltersStore()
  const presetStore = usePresetStore()


  const handleDownloadClick = () => {
    getReport(messageExport.format, messageExport.fileName, {
      presetName: presetStore.currentPreset.presetName,
      invisibleFieldsIsAvailable: messageExport.invisibleFieldsIsAvailable,
      categories: messageFilters.categories,
      createDateRange: messageFilters.createDateRange,
      messageTypes: messageFilters.messageTypes,
      metadata: messageFilters.metadata,
      priority: messageFilters.priority,
      securityLabels: messageFilters.securityLabels,
      statuses: messageFilters.statuses,
      updateDateRange: messageFilters.updateDateRange
    })
  }

  return {
    handleDownloadClick
  }
}