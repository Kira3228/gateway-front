import { useMessageStore } from "@/entities/message/model"
import { useMessageExportStore } from "./use-message-export-store"

export const useMessageExport = () => {
  const { getReport } = useMessageStore()
  const messageExport = useMessageExportStore()

  const handleDownloadClick = () => {
    getReport(messageExport.format, messageExport.fileName)
  }

  return {
    handleDownloadClick
  }
}