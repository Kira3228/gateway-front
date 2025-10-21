import { TMessageExt } from "@/shared/types/message-ext/TMessageExt"
import { ActionTree, MutationTree } from "vuex"
import { RootState } from ".."
import { fetchMessageExts } from "@/shared/api/messageExt"

type TInitialState = {
  items: TMessageExt
}

const state: TInitialState = {
  items: {
    id: 0,
    createdAt: new Date(0),
    receiving_at: new Date(0),
    received_at: new Date(0),
    sending_at: new Date(0),
    sent_at: new Date(0),
    delivered_at: new Date(0),
    read_at: null,
    totalFilesCount: 0,
    totalSizeBytes: 0,
    checksum: "",
    metadata: "",
  }
}

const mutation: MutationTree<TInitialState> = {
  SET_EXT(state: TInitialState, newExt: TMessageExt) {
    state.items = { ...newExt }
  }
}

const actions: ActionTree<TInitialState, RootState> = {
  async loadItems({ commit, state }, messageId: string) {
    try {
      if (state.items) {
        const data = await fetchMessageExts({ messageId: messageId });
        
      }
    }
    catch (error) {

    }
  }
}