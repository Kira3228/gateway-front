import { useApi } from "@/shared/api/http"
import { Preset } from "../model/types"

export const updatePreset = (body: Preset) => {
  const { patch } = useApi()
  return patch<Preset>(`/messages/preset/update`, body)
}