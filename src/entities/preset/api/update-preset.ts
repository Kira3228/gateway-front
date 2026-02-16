import { useApi } from "@/shared/api/http"
import { Preset } from "../model/types"

export const updatePreset = (body: any) => {
  const { patch } = useApi()
  return patch<Preset>(``, body)
}