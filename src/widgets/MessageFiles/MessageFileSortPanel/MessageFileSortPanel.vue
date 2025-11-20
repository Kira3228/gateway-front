<template>
  <sort-panel-layout-vue :sortButtonsItems="buttons">
    <template #ui-item> </template>
  </sort-panel-layout-vue>
</template>
<script lang="ts">
import { MessageFileSortButtons } from "./MessageFileSortButtons";
import SortPanelLayoutVue from "@/shared/UI/SortPanelLayout/SortPanelLayout.vue";
import Vue from "vue";
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
export default Vue.extend({
  components: { SortPanelLayoutVue },
  data() {
    return {
      buttons: MessageFileSortButtons as TButtonGroupItem[][],
    };
  },
});
</script>
F
