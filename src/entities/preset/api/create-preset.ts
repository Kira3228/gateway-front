import { useApi } from "@/shared/api/http"
import { Header, Preset } from "../model/types"

export const createPreset = async (body: Preset) => {
  const { post } = useApi()

  return await post(`/messages/preset/create`, body)
}