import { usePresetStore } from "@/entities/preset/model/use-preset-store"
import { Header } from "@/shared-ui/src/components/DataTable"
import { onMounted, ref } from "vue"

export const usePresetList = () => {
  const presetStore = usePresetStore()
  const activePresetIndex = ref<number | null>(null)

  onMounted(async () => {
    await presetStore.loadPresets()

    if (presetStore.presetList.length > 0) {
      await presetStore.loadPresetForSettings(presetStore.presetList[0])
      activePresetIndex.value = 0
    }
  })


  const handlePresetChange = async (index: number | null) => {
    if (index === null) return

    const presetName = presetStore.presetList[index]
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

  const handleUpdatePreset = async () => {
    // Реализация обновления
  }

  return {
    activePresetIndex,
    handlePresetChange,
    handleDeletePreset,
  }
}
