<template>
  <sort-panel-layout-vue
    @sort-button-click="handleClick"
    :sortButtonsItems="sortButtons"
  >
    <template #ui-item>
      <div>
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
        <select-input-vue
          label="Новый статус"
          chips
          multiple
          v-model="selectedNewStatuses"
          :items="statusHistoryOptions"
          @debounce="handleSelectStatus"
        >
          <template #selectedChip="{ item, index }">
            <v-chip
              v-if="index === 1 || index === 0"
              @click:close="handleRemoveNewChip(index)"
              :color="getColor(item.label)"
            >
              {{ item.label }}
            </v-chip>
            <span class="tw-text-xs" v-if="index === 2"
              >(+{{ selectedNewStatuses.length - 2 }} выбрано)</span
            >
          </template>
        </select-input-vue>
        <select-input-vue
          label="Тип пользователя"
          chips
          multiple
          v-model="selectUserType"
          :items="userTypeOptions"
          @debounce="handleSelectStatus"
        >
          <template #selectedChip="{ item, index }">
            <v-chip
              v-if="index === 1 || index === 0"
              @click:close="handleRemoveNewChip(index)"
              :color="getColor(item.label)"
            >
              {{ item.label }}
            </v-chip>
            <span class="tw-text-xs" v-if="index === 2"
              >(+{{ selectUserType.length - 2 }} выбрано)</span
            >
          </template>
        </select-input-vue>
      </div>
    </template>
  </sort-panel-layout-vue>
</template>

<script lang="ts">
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import SelectInputVue from "@/shared/UI/SelectInput/SelectInput.vue";
import { TOption } from "@/shared/UI/SelectInput/TOptions";
import SortPanelLayoutVue from "@/shared/UI/SortPanelLayout/SortPanelLayout.vue";
import { getStatusColor } from "@/shared/lib/getColorForChip";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import { UserTypeOptions } from "../UserType";
import { SelectStatusHisotry } from "./SelectStatusHistory";
import { StatusHstorySortButtons } from "./StatusHstorySortButtons";
import { useStatusHistry } from "@/features/statusHistory/model";

interface IStatusHistorySortPanelData {
  sortButtons: TButtonGroupItem[][];
  statusHistoryOptions: TOption[];
  userTypeOptions: TOption[];
}

interface IStatusHistorySortPanelComputed {
  selectedOldStatuses: string[];
  selectedNewStatuses: string[];
  selectUserType: string[];
}

interface IStatusHistrySortPanelMethods {
  getColor: (status: string) => string;
  handleSelectStatus: () => Promise<void>;
  handleRemoveOldChip: (index: number) => void;
  handleRemoveNewChip: (index: number) => void;
  handleClick: (data: any) => void;
}

interface IProps {}

const computedLogic = useStatusHistry();

export default Vue.extend<
  IStatusHistorySortPanelData,
  IStatusHistrySortPanelMethods,
  IStatusHistorySortPanelComputed,
  IProps
>({
  name: `StatusHistoyrSortPanelyWidget`,
  props: {
    sortButtonsItems: {
      type: Array as PropType<TButtonGroupItem[][]>,
      default: () => [],
    },
  },
  components: { SortPanelLayoutVue, SelectInputVue },

  data(): IStatusHistorySortPanelData {
    return {
      sortButtons: StatusHstorySortButtons,
      statusHistoryOptions: SelectStatusHisotry,
      userTypeOptions: UserTypeOptions,
    };
  },

  computed: {
    selectedOldStatuses: computedLogic.selectedOldStatuses,
    selectedNewStatuses: computedLogic.selectedNewStatuses,
    selectUserType: computedLogic.selectUserType,
  },

  methods: {
    getColor(status: string): string {
      return getStatusColor(status);
    },

    async handleSelectStatus(): Promise<void> {
      await computedLogic.handleSelectStatus();
    },

    handleRemoveOldChip(index: number) {
      computedLogic.handleRemoveChip(this.selectedOldStatuses, index, "old");
    },

    handleRemoveNewChip(index: number) {
      computedLogic.handleRemoveChip(this.selectedOldStatuses, index, "new");
    },
    handleClick(data: TButtonGroupItem & { isActive: boolean }) {
      if (data.isActive) {
        console.log(`ЖОПА`, data);
      } else {
        console.log(`КАКА`, data);
      }
    },
  },
});
</script>
