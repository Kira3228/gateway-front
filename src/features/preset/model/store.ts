import { defineStore } from "pinia";
import { fetchPresets } from "../api/getPresets";

interface ChoosePreset {
  presets: string[]
  selectedPreset: string
}
export const useChoosePresetStore = defineStore(`choose-preset-store`, {
  state: (): ChoosePreset => ({ presets: [], selectedPreset: '' }),
  actions: {
    async getPreset() {
      const presets = await fetchPresets()
      this.presets = presets
    },
    setPreset(newPreset: string) {
      this.selectedPreset = newPreset
    }
  }
})