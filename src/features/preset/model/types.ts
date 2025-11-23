export interface IPresetData {
}

export interface IPresetMethods {
  handleSelect: (data: any) => void
}

export interface IPresetProps {

}

export interface IPresetComputed {
  presetList: { label: string, value: string }
  selectedPreset: string
}