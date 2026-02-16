import { defineStore } from "pinia";
import { fetchPresets, fetchPreset, deletePreset } from "../api";
import { ref } from "vue";
import { Header, Preset } from "./types";
import { defaultHeadersState } from './default-state'
import { createPreset } from "../api/create-preset";
import { __makeTemplateObject } from "tslib";
import { updatePreset } from "../api/update-preset";

export const usePresetStore = defineStore(`preset-store`, () => {
  const presetNameList = ref<string[]>([])
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
    presetNameList.value = list
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
    presetNameList.value = preset
    newCustomPreset.value = [...defaultHeadersState]
    newCustomPresetName.value = ""
  }

  const updateTablePreset = async (config: Preset) => {
    const result = await updatePreset(config)

  }
  const deleteTablePreset = async (presetName: string) => {
    const result = await deletePreset(presetName)
    presetNameList.value = [...result]
  }

  return {
    loadPreset,
    loadPresets,
    createNewPreset,
    deleteTablePreset,
    loadPresetForSettings,
    updateTablePreset,
    presetNameList,
    currentPreset,
    newCustomPreset,
    presetForSettings,
    selectedPresetName,
    newCustomPresetName,
  }
})