import { useApi } from "@/shared/api/http"
import { Preset } from "../model/types"

export const updatePreser = (body: any) => {
  const { patch } = useApi()
  return patch<Preset>(``, body)
}