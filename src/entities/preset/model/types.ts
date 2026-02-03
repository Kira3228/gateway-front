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

export interface Preset {
  presetName: string;
  displayName: string;
  headers: Header[];
  exceptions: Exception[];
  default_filters: DefaultFilters;
}

export interface DefaultFilters {
  sortBy: string[];
  sertDesc: boolean[];
}

export interface Exception {
  field: string;
  values: any[];
}

export interface Header {
  text: string;
  value: string;
  sortable: boolean;
  isVisible: boolean;
  width: number;
  align: 'start' | 'center' | 'end';
}


export type PresetNamesResponse = {
  presetName: string,
  displayName: string
}