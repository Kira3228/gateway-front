import { useHeaderModel } from "@/entities/header/model/model"
import store from "@/store"

export const usePreset = () => {
  const init = async (): Promise<void> => {
    await store.dispatch(`features/presetStore/getPresetList`)
  }

  const presetList = (): { label: string, value: string } => {
    return store.getters[`features/presetStore/presets`]
  }

  const selectedPreset = {
    get(): string {
      return store.state.features.presetStore.preset
    },
    set(value: string) {
      store.commit(`features/presetStore/setNewPreset`, value)
    }
  }

  const handleSelectPreset = async (preset: string) => {
    const headerStore = useHeaderModel()
    return await headerStore.getHeaders(preset)
  }

  return {
    init,
    presetList,
    selectedPreset,
    handleSelectPreset

  }
}