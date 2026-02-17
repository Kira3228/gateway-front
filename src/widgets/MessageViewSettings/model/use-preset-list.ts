import { usePresetStore } from "@/entities/preset/model/use-preset-store"
import { onMounted, ref } from "vue"
import { Preset } from "@/entities/preset/model/types"


export const usePresetList = () => {
  const presetStore = usePresetStore()
  const activePresetIndex = ref<number | null>(null)

  onMounted(async () => {
    await presetStore.loadPresets()

    if (presetStore.presetNameList.length > 0) {
      await presetStore.loadPresetForSettings(presetStore.presetNameList[0])
      activePresetIndex.value = 0
    }
  })


  const handlePresetChange = async (index: number | null) => {
    if (index === null) return

    const presetName = presetStore.presetNameList[index]
    await presetStore.loadPresetForSettings(presetName)
  }

  const handleDeletePreset = async (presetName: string) => {
    await presetStore.deleteTablePreset(presetName)

    if (presetStore.selectedPresetName === presetName) {
      presetStore.presetForSettings = []
      presetStore.selectedPresetName = ''
      activePresetIndex.value = null
    }
  }

  const handleUpdatePreset = async (config: Preset) => {
    presetStore.updateTablePreset(config)
  }

  return {
    activePresetIndex,
    handlePresetChange,
    handleDeletePreset,
    handleUpdatePreset
  }
}
