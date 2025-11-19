import { TMessage } from "@/shared/types/messages/TMessage";
import store from "@/store";

export const useMessageList = () => {
  const init = async () => {
    await store.dispatch(`messageStore/getHeaders`);
    await store.dispatch(`messageStore/loadItems`);
    await store.dispatch(`messageStore/getPresetNames`);
  }

  return {
    init,
    get items(): TMessage[] {
      return store.state.messageStore.items
    },
    get headers() {
      return store.state.messageStore.headers;
    },
    get isTableLoading() {
      return store.state.messageStore.isTableLoading
    },
    get presetList() {
      return store.state.messageStore.presetList
    },
    get selectPreset() {
      return store.state.messageStore.preset
    }
  }
}

