import { useApi } from "@/shared/api/http"
import { Preset } from "../model/types"

export const fetchPreset = async (params: { presetName?: string }) => {
  const { get } = useApi()
  return get<Preset, { presetName?: string }>(`/messages/preset`, params)
}