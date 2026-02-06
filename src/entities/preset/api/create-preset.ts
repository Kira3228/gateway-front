import { useApi } from "@/shared/api/http"

export const createPreset = async () => {
  const { post } = useApi()
  return await post(`/messages/create/preset`, {})
}