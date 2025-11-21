import { useApi } from "@/shared/api/http";
import { THeaderColumn } from "../model/types";

const { get } = useApi()

export const fetchHeaders = async (preset: string) => {
  const params: { preset: string } = { preset: preset }
  const headers = await get<THeaderColumn[]>(`/messages/headers`, params)
  console.log(`headers`, headers);
  return headers
}