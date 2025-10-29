import { BASE_URL } from "@/CONSTANTS"
import { httpGet } from "./http"

export const fetchPresets = () => {
  return httpGet<string[]>(`${BASE_URL}/messages/preset/names`)
}