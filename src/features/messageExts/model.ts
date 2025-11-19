import { TMessageExt } from "@/shared/types/message-ext/TMessageExt"
import { TMessage } from "@/shared/types/messages/TMessage"
import store from "@/store"

export const messageDetails = () => {
  const loadDetails = async (message: TMessage) => {
    await store.dispatch(`messageStore/getExts`, message.messageId)
    await store.dispatch(`messageStore/getMessageFile`, { id: message.id })
    await store.dispatch(`messageStore/getStatusHistory`, { id: message.id })
  }

  return {
    loadDetails,
    get messageExt(): TMessageExt {
      return store.getters["messageStore/messages"]
    },
    get messageFiles() {
      return store.state.messageStore.files;
    },
    get statusHistory() {
      return store.getters["messageStore/formatedHistory"];
    }
  }
}