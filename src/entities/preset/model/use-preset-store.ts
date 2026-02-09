import { defineStore } from "pinia";
import { fetchPresets, fetchPreset } from "../api";
import { ref } from "vue";
import { Preset } from "./types";
import { defaultHeadersState } from './default-state'


export const usePresetStore = defineStore(`preset-store`, () => {
  const presetList = ref<string[]>([])
  
  const currentPreset = ref<Preset>({ default_filters: { sertDesc: [], sortBy: [] }, displayName: '', exceptions: [], headers: defaultHeadersState, presetName: "" })
  
  const currentPresetName = ref<string>()

  const loadPresets = async () => {
    const list = await fetchPresets()
    presetList.value = list
  }

  const loadPreset = async (presetName?: string) => {
    const preset = await fetchPreset({ presetName: presetName })
    currentPreset.value = preset
  }

  const createNewPreset = async (presetName: string, body: any) => {
    console.log({
      presetName,
      body
    });

    // const preset = await createPreset()
  }

  return {
    presetList, loadPresets, loadPreset, currentPreset, currentPresetName, createNewPreset,
  }
})