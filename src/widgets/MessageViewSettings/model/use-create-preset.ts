import { usePresetStore } from "@/entities/preset/model/use-preset-store"
import { Preset } from "@/entities/preset/model/types"
import { ref } from "vue"

export const useCreatePreset = (formRef: any) => {
  const presetStore = usePresetStore()

  const handleCreatePreset = async () => {
    if (!formRef.value?.validate()) return;

    const newPreset: Preset = {
      headers: presetStore.newCustomPreset,
      presetName: presetStore.newCustomPresetName,
    }
    await presetStore.createNewPreset(newPreset)
    requestAnimationFrame(() => {
      formRef.value?.resetValidation();
    });
  }
  return {
    handleCreatePreset,
  }
}