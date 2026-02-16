import { usePresetStore } from "@/entities/preset/model/use-preset-store"
import { Preset } from "@/entities/preset/model/types"
import { ref } from "vue"

export const useCreatePreset = () => {
  const presetStore = usePresetStore()


  const handleCreatePreset = async () => {
    const newPreset: Preset = {
      headers: presetStore.newCustomPreset,
      presetName: presetStore.newCustomPresetName,
    }
    await presetStore.createNewPreset(newPreset)
  }
  return {
    handleCreatePreset,
  }
}