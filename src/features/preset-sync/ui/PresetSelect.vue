<template>
  <UiSelect
    label="Пресет"
    :items="presetStore.presetList"
    v-model="presetName"
  />
</template>
<script lang="ts" setup>
import { UiSelect } from "@/shared-ui/src/components/Select";
import { usePresetSync } from "../model/use-preset-sync";
const { presetStore, presetName } = usePresetSync();
</script>
