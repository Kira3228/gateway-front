import { useApi } from "@/shared/api/http";

const { get } = useApi()

export const fetchHeaders = async (preset: string) => {
  const params: { preset: string } = { preset: preset }
  const headers = await get<string[]>(`/messages/headers`, params)
  return headers
}