import store from "@/store"

export const useMessageTableModel = () => {
  const init = async () => {
    await store.dispatch(`entities/messageStore/getMessages`)
    await store.dispatch(`entities/headerStore/getHeaders`)
  }


  return {
    init,
    get headers() {
      return store.state.entities.headerStore.headers
    },
    get messages() {
      return store.state.entities.messageStore.messages
    },
    get isLoading() { return store.state.entities.messageStore.isLoading }
  }
}