import { useApi } from "@/shared/api/http"

export const getJsonReport = async (
  format: string,
  fileName: string,
  params?: {
    invisibleFieldsIsAvailable?: boolean,
    priority?: [number | undefined, number | undefined] | undefined
    metadata?: boolean
    createDateRange?: [string, string]
    updateDateRange?: [string, string]
    categories?: string
    messageTypes?: string
    statuses?: string
    securityLabels?: string
  }
) => {

  console.log(format, fileName);


  const { httpGetBlob, downloadBlob } = useApi()
  const blob = await httpGetBlob(`/report/message/${format}`, params)
  downloadBlob(blob, { filename: fileName })
}