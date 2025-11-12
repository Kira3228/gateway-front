<template>
  <sort-panel-layout-vue :sort-buttons-items="sortButtonsItems">
    <template #ui-item>
      <select-input-vue
        class="tw-mb-6"
        label="Старый статус"
        chips
        multiple
        v-model="selectedOldStatuses"
        :items="statusHistoryOptions"
        @debounce="handleSelectStatus"
      >
        <template #selectedChip="{ item, index }">
          <v-chip
            v-if="index === 1 || index === 0"
            @click:close="handleRemoveOldChip(index)"
            :color="getColor(item.label)"
          >
            {{ item.label }}
          </v-chip>
          <span class="tw-text-xs" v-if="index === 2"
            >(+{{ selectedOldStatuses.length - 2 }} выбрано)</span
          >
        </template>
      </select-input-vue>
    </template>
  </sort-panel-layout-vue>
</template>

<script lang="ts">
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import SortPanelLayoutVue from "@/shared/UI/SortPanelLayout/SortPanelLayout.vue";

export default Vue.extend({
  props: {
    sortButtonsItems: {
      type: Array as PropType<TButtonGroupItem[][]>,
      default: () => [],
    },
  },
  components: { SortPanelLayoutVue },
});
</script>
