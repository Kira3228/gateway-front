import { TMessage } from "@/shared/types/messages/TMessage";
import store from "@/store";

export const useMessageList = () => {
  const init = async () => {
    await store.dispatch(`messageStore/getHeaders`);
    await store.dispatch(`messageStore/loadItems`);
    await store.dispatch(`messageStore/getPresetNames`);
  }

  const relaod = async () => {
    await store.dispatch('messageStore/loadItems')
  }

  return {
    init,
    relaod,
    get items(): TMessage[] {
      return store.state.messageState.items
    },
    get headers() {
      return store.state.messageState.headers;
    },
    get isTableLoading() {
      return store.state.messageState.isTableLoading
    },
    get presetList() {
      return store.state.messageState.presetList
    },
    get selectPreset() {
      return store.state.messageState.preset
    }
  }
}

