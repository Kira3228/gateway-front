import { defineStore } from "pinia";
import { fetchPresets, fetchPreset, deletePreset } from "../api";
import { ref } from "vue";
import { Header, Preset } from "./types";
import { defaultHeadersState } from './default-state'
import { createPreset } from "../api/create-preset";
import { __makeTemplateObject } from "tslib";

export const usePresetStore = defineStore(`preset-store`, () => {
  const presetList = ref<string[]>([])
  const currentPresetName = ref<string>()
  const currentPreset = ref<Preset>({
    default_filters: {
      sertDesc: [],
      sortBy: []
    },
    exceptions: [],
    headers: [],
    presetName: ""
  })
  const newCustomPreset = ref<Header[]>(defaultHeadersState)
  const newCustomPresetName = ref<string>('')

  const presetForSettings = ref<Header[]>([])
  const selectedPresetName = ref<string>('')

  const loadPresets = async () => {
    const list = await fetchPresets()
    presetList.value = list
  }

  const loadPreset = async (presetName?: string) => {
    const preset = await fetchPreset({ presetName: presetName })
    currentPreset.value = preset
  }

  const loadPresetForSettings = async (presetName: string) => {
    const preset = await fetchPreset({ presetName })
    presetForSettings.value = preset.headers || []
    selectedPresetName.value = preset.presetName
  }

  const createNewPreset = async (data: Preset) => {
    const preset = await createPreset(data)
    presetList.value = preset

    console.log(`До`, newCustomPreset.value,
      newCustomPresetName.value);

    newCustomPreset.value = [...defaultHeadersState]
    newCustomPresetName.value = ""

    console.log(`После`, newCustomPreset.value,
      newCustomPresetName.value);
  }

  const updatePreset = async (presetName: string, body: any) => {

  }
  const deleteTablePreset = async (presetName: string) => {
    const result = await deletePreset(presetName)
    presetList.value = [...result]
  }

  return {
    loadPreset,
    loadPresets,
    updatePreset,
    createNewPreset,
    deleteTablePreset,
    loadPresetForSettings,
    presetList,
    currentPreset,
    newCustomPreset,
    currentPresetName,
    presetForSettings,
    selectedPresetName,
    newCustomPresetName,
  }
})