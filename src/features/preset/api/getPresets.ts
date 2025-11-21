import { useApi } from "@/shared/api/http";

const { get } = useApi()

export const fetchPresets = async (): Promise<string[]> => {
  const presets = await get<string[]>(`/messages/preset/names`)
  return presets
}