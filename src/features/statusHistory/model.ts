import store from "@/store"

export const useStatusHistry = () => {
  const handleSelectStatus = async (): Promise<void> => {
    await store.dispatch(`messageStore/getStatusHistory`)
  }
  const handleRemoveChip = (selectedStatuses: string[], index: number, type: "new" | "old") => {
    const newStatuses = [...selectedStatuses];
    newStatuses.splice(index, 1);
    if (type === "new") {
      store.commit("messageStore/SET_SELECTED_NEW_STATUSES", newStatuses);
    }
    else {
      store.commit("messageStore/SET_SELECTED_OLD_STATUSES", newStatuses);
    }
  }

  const selectedOldStatuses = {
    get(): string[] {
      return store.state.messageStore.selectedOldStatuses;
    },
    set(newStatus: string[]): void {
      store.commit(`messageStore/SET_SELECTED_OLD_STATUSES`, newStatus);
    },
  }
  const selectedNewStatuses = {
    get(): string[] {
      return store.state.messageStore.selectedNewStatuses;
    },
    set(newStatus: string[]) {
      store.commit(`messageStore/SET_SELECTED_NEW_STATUSES`, newStatus);
    },
  }

  const selectUserType = {
    get(): string[] {
      return store.state.messageStore.selectedUserType;
    },
    set(newState: string[]) {
      store.commit(`messageStore/SET_SELECTED_USER_TYPE`, newState);
    },
  }

  return {
    handleSelectStatus,
    handleRemoveChip,
    selectedOldStatuses,
    selectedNewStatuses,
    selectUserType
  }
}