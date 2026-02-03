import { storeToRefs } from "pinia"
import { useChoosePresetStore } from "./store"

export const useChoosePresetModel = () => {
  const store = useChoosePresetStore()
  const { preset, presetName, presetsNameList } = storeToRefs(store)

  return {
    store,
    preset,
    presetName,
    presetsNameList
  }
}