import { defineStore } from "pinia";
import { fetchPresets } from "../../../entities/preset/api/fetch-presets";
import { fetchPreset } from "../../../entities/preset/api/fetch-preset";
import { Preset, PresetNamesResponse } from "../../../entities/preset/model/types";

interface ChoosePreset {
  presetsNameList: string[]
  preset: Preset | null
  presetName: string
}
export const useChoosePresetStore = defineStore(`choose-preset-store`, {
  state: (): ChoosePreset => ({ presetsNameList: [], preset: null, presetName: `standart` }),
  actions: {
    async getPresetNames() {
      const presetsNames = await fetchPresets()
      this.presetsNameList = presetsNames
      console.log(this.presetsNameList);

    },
    async getPreset(presetName: string) {
      const preset = await fetchPreset({ presetName: presetName })
      this.preset = { ...preset }
    }
  }
})