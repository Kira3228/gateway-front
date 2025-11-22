import { useApi } from "@/shared/api/http"

export const fetchPagination = async () => {
  const { get } = useApi()
  const length = get(``)
  return length
}