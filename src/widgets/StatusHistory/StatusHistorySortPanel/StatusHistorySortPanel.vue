<template>
  <sort-panel-layout-vue :sortButtonsItems="sortButtons">
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
    </template></sort-panel-layout-vue
  >
</template>

<script lang="ts">
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import SelectInputVue from "@/shared/UI/SelectInput/SelectInput.vue";
import { TOption } from "@/shared/UI/SelectInput/TOptions";
import SortPanelLayoutVue from "@/shared/UI/SortPanelLayout/SortPanelLayout.vue";
import { getStatusColor } from "@/shared/utils/getColorForChip";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import { UserTypeOptions } from "../UserType";
import { SelectStatusHisotry } from "./SelectStatusHistory";
import { StatusHstorySortButtons } from "./StatusHstorySortButtons";
export default Vue.extend({
  props: {
    sortButtonsItems: {
      type: Array as PropType<TButtonGroupItem[][]>,
      default: () => [],
    },
  },
  components: { SortPanelLayoutVue, SelectInputVue },
  data() {
    return {
      sortButtons: StatusHstorySortButtons as TButtonGroupItem[][],
      statusHistoryOptions: SelectStatusHisotry,
      userTypeOptions: UserTypeOptions,
    };
  },
  computed: {
    selectedOldStatuses: {
      get(): TOption[] {
        return this.$store.state.messageStore.selectedOldStatuses;
      },
      set(newStatus: TOption[]) {
        this.$store.commit(`messageStore/SET_SELECTED_OLD_STATUSES`, newStatus);
      },
    },
    selectedNewStatuses: {
      get(): TOption[] {
        return this.$store.state.messageStore.selectedNewStatuses;
      },
      set(newStatus: TOption[]) {
        this.$store.commit(`messageStore/SET_SELECTED_NEW_STATUSES`, newStatus);
      },
    },

    selectUserType: {
      get() {
        return this.$store.state.messageStore.selectedUserType;
      },
      set(newState: string[]) {
        this.$store.commit(`messageStore/SET_SELECTED_USER_TYPE`, newState);
      },
    },
  },

  methods: {
    getColor(status: string): string {
      return getStatusColor(status);
    },
    async handleSelectStatus() {
      await this.$store.dispatch(`messageStore/getStatusHistory`);
    },
    handleRemoveOldChip(index: number) {
      const newStatuses = [...this.selectedOldStatuses];
      newStatuses.splice(index, 1);
      this.$store.commit("messageStore/SET_SELECTED_OLD_STATUSES", newStatuses);
    },
    handleRemoveNewChip(index: number) {
      const newStatuses = [...this.selectedNewStatuses];
      newStatuses.splice(index, 1);
      this.$store.commit("messageStore/SET_SELECTED_NEW_STATUSES", newStatuses);
    },
  },
});
</script>
