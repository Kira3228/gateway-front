<template>
  <select-input-vue
    :items="presetList"
    v-model="selectedPreset"
    placeholder="Режим отображения"
    @debounce="handleSelect"
    itemText="label"
    item-value="value"
    returnObject
  ></select-input-vue>
</template>
<script lang="ts">
import SelectInputVue from "@/shared/UI/SelectInput/SelectInput.vue";
import Vue from "vue";
import { usePreset } from "../model/model";
import { IPresetMethods, IPresetProps, IPresetData } from "../model/types";
import { IPresetComputed } from "../model/types";

const presetModel = usePreset();

export default Vue.extend<
  IPresetData,
  IPresetMethods,
  IPresetComputed,
  IPresetProps
>({
  data(): IPresetData {
    return {};
  },
  components: {
    SelectInputVue,
  },
  async mounted() {
    await presetModel.init();
  },
  computed: {
    presetList(): { label: string; value: string } {
      return presetModel.presetList();
    },
    selectedPreset: presetModel.selectedPreset,
  },
  methods: {
    async handleSelect(preset: string) {
      return await presetModel.handleSelectPreset(preset);
    },
  },
});
</script>
