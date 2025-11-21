import store from "@/store"

export const useHeaderStore = () => {
  const getHeaders = async (preset: string) => {
    await store.dispatch(`entities/headerStore/getHeaders`, preset)
  }

  return { getHeaders }
}