import { useApi } from "@/shared/api/http"

export const deletePreset = (presetName: string) => {
  const { httpDelete } = useApi()
  return httpDelete<string[]>(`/messages/preset/delete`, { presetName })
}