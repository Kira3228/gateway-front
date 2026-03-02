import { useApi } from "@/shared/api/http"

export const getJsonReport = async (
  format: string,
  fileName: string,
  invisibleFieldsIsAvailable?: boolean,
  params?: {
    priority?: [number, number]
    metadata?: boolean
    createDateRange?: [string, string]
    updateDateRange?: [string, string]
    categories?: string
    messageTypes?: string
    statuses?: string
    securityLabels?: string
  }
) => {
  const { httpGetBlob, downloadBlob } = useApi()
  const blob = await httpGetBlob(`/report/message/json`)
  downloadBlob(blob, { filename: `rep` })
}