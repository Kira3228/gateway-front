<template>
  <ext-file-layout-vue title="История изменения">
    <div class="tw-items-center">
      <text-input-vue label="Поиск" isSearch></text-input-vue>
      <button-group-vue :height="30" :items="sortFields"> </button-group-vue>
      <select-input-vue
        class="tw-mb-6"
        label="Сортировка"
        :items="[]"
        @debounce="handleSelect"
      ></select-input-vue>
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

      <!-- ВОТ ЭТОТ ИНПУТ -->
      <select-input-vue
        placeholder="Выберите опцию"
        label="Сортировка"
        :items="sortFields"
        customList
      >
        <template #ui-item="{ item, on, attrs }">
          <v-list-item v-bind="attrs" v-on="on">
            <v-list-item-action>
              <component :is="item.component"></component>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </select-input-vue>
      <!-- ВОТ ЭТОТ ИНПУТ -->
    </div>
    <div class="tw-flex-1">
      <div v-if="isLoading" class="tw-flex tw-flex-col tw-gap-2">
        <v-skeleton-loader
          v-for="n in 6"
          :key="n"
          max-height="110px"
          type="card"
        ></v-skeleton-loader>
      </div>
      <virtual-scroll-vue :height="750" itemHeight="150px" v-else :items="items">
        <template v-slot:item="{ item }">
          <list-item-vue class="" :key="item.id" :item="item">
            <template v-slot:content="{ item }">
              <status-history-card-vue :item="item"></status-history-card-vue>
            </template>
          </list-item-vue>
        </template>
      </virtual-scroll-vue>
    </div>
  </ext-file-layout-vue>
</template>

<script lang="ts">
import { TStatusHistory } from "@/shared/types/common/TStatusHistory";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import VirtualScrollVue from "@/shared/UI/VirtualScroll/VirtualScroll.vue";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
import SearchBarVue from "@/shared/UI/SearchBar/SearchBar.vue";
import AutocompliteVue from "@/shared/UI/Autocomplite/Autocomplite.vue";
import { TSortOptions } from "@/shared/types/common/TSortOptions";
import SelectInputVue from "@/shared/UI/SelectInput/SelectInput.vue";
import { SelectStatusHisotry } from "./SelectStatusHistory";
import { TOption } from "@/shared/UI/SelectInput/TOptions";
import ExtFileLayoutVue from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import StatusHistoryCardVue from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import { getStatusColor } from "@/shared/utils/getColorForChip";
import TextInputVue from "@/shared/UI/TextInput/TextInput.vue";
import CheckboxVue from "@/shared/UI/Checkbox/Checkbox.vue";
import { UserTypeOptions } from "./UserType";
import { SelectSort } from "./SelectSort";
import ButtonGroupVue from "@/shared/UI/ButtonGroup/ButtonGroup.vue";
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";

export default Vue.extend({
  components: {
    VirtualScrollVue,
    CheckboxVue,
    ListItemVue,
    SearchBarVue,
    AutocompliteVue,
    SelectInputVue,
    ExtFileLayoutVue,
    StatusHistoryCardVue,
    TextInputVue,
    ButtonGroupVue,
  },
  props: {
    items: {
      type: Array as PropType<TStatusHistory[]>,
      default: () => {},
    },
  },
  data() {
    return {
      selectedStatuses: [] as TOption[],
      statusHistoryOptions: SelectStatusHisotry,
      userTypeOptions: UserTypeOptions,
      sortFields: SelectSort as TButtonGroupItem[],
    };
  },
  methods: {
    getColor(status: string): string {
      return getStatusColor(status);
    },

    handleSelect(newValue: TSortOptions) {
      this.$emit(`select-item`, newValue);
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
    async handleSelectStatus() {
      await this.$store.dispatch(`messageStore/getStatusHistory`);
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.messageStore.isStatusHistoryLoading;
    },
    selectedOldStatuses: {
      get(): TOption[] {
        return this.$store.state.messageStore.selectedOldStatuses;
      },
      set(newStatus: TOption[]) {
        this.$store.commit(`messageStore/SET_SELECTED_OLD_STATUSES`, newStatus);
      },
    },
    isAdmin: {
      get(): boolean {
        return this.$store.state.messageStore.isAdmin;
      },
      set(newState: boolean) {
        this.$store.commit(`messageStore/SET_IS_ADMIN`, newState);
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
});
</script>
