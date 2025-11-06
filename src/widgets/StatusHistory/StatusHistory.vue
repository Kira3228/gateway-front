<template>
  <v-sheet class="tw-p-3" width="100%">
    <v-card-title> Итория изменений </v-card-title>
    <div class="tw-flex tw-gap-4 tw-items-center">
      <select-input-vue :items="[]" @debounce="handleSelect"></select-input-vue>
      <select-input-vue
        chips
        multiple
        v-model="selectedStatuses"
        :items="statusHistoryOptions"
        @debounce="() => {}"
      >
        <template #selectedChip="{ item, index }">
          <v-chip
            v-if="index === 0"
            close
            @click:close="selectedStatuses.splice(index, 1)"
            :color="getStatusColor(item.label)"
          >
            {{ item.label }}
          </v-chip>
          <span v-if="index === 1">(+{{ selectedStatuses.length }} выбрано)</span>
        </template>
      </select-input-vue>
    </div>

    <div v-if="isLoading" class="tw-flex tw-flex-col tw-gap-2">
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
    </div>
    <virtual-scroll-vue asd="140px" v-else :items="items">
      <template v-slot:item="{ item }">
        <list-item-vue class="" :key="item.id" :item="item">
          <template v-slot:content="{ item }">
            <div class="tw-flex-col tw-items-center">
              <span class="tw-text-gray-600 tw-text-sm tw-mr-1">{{
                item.user.fullName
              }}</span>
              <span class="tw-text-gray-600 tw-text-xs tw-mr-1">{{
                item.changeDatetime
              }}</span>
              <span>[{{ item.user.userType }}] </span>
              <span class="tw-text-green-700 tw-mr-1" v-if="item.user.isActive"
                >Online</span
              >
              <span class="tw-text-red-700 tw-mr-1" v-else>Offline</span>
            </div>
            <div class="tw-flex">
              <v-chip :color="getStatusColor(item.oldStatus)">{{
                item.oldStatus
              }}</v-chip>
              <v-icon>mdi-forward</v-icon>
              <v-chip :color="getStatusColor(item.newStatus)">{{
                item.newStatus
              }}</v-chip>
            </div>
            <p>Причина {{ item.reason }}</p>
            <p>{{ item.metadata }}</p>
          </template>
        </list-item-vue>
      </template>
    </virtual-scroll-vue>
  </v-sheet>
</template>
<script lang="ts">
import { TStatusHistory } from "@/shared/types/common/TStatusHistory";
import Vue, { triggerRef } from "vue";
import { PropType } from "vue/types/v3-component-props";
import VirtualScrollVue from "@/shared/UI/VirtualScroll/VirtualScroll.vue";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
import SearchBarVue from "@/shared/UI/SearchBar/SearchBar.vue";
import AutocompliteVue from "@/shared/UI/Autocomplite/Autocomplite.vue";
import { TSortOptions } from "@/shared/types/common/TSortOptions";
import SelectInputVue from "@/shared/UI/SelectInput/SelectInput.vue";
import { SelectStatusHisotry } from "./SelectStatusHistory";
import { TOption } from "@/shared/UI/SelectInput/TOptions";
export default Vue.extend({
  components: {
    VirtualScrollVue,
    ListItemVue,
    SearchBarVue,
    AutocompliteVue,
    SelectInputVue,
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
    };
  },
  methods: {
    getColor(isActive: boolean): `green` | `red` {
      return isActive ? `green` : `red`;
    },
    getStatusColor(status: string): string {
      switch (status) {
        case `создано`:
          return `#007bff`;
        case `принимается`:
          return "#17a2b8";
        case `принято`:
          return "#28a745";
        case `обработано`:
          return "#ffc107";
        case `отправляется`:
          return "#17a2b8";
        case `отправлено`:
          return "#007bff";
        case `доставлено`:
          return "#28a745";
        case `прочитано`:
          return "#6f42c1";
        default:
          return `#dc3545`;
      }
    },
    handleSelect(newValue: TSortOptions) {
      this.$emit(`select-item`, newValue);
    },
    handleChipClick(data: TOption) {
      this.selectedStatuses = [
        ...this.selectedStatuses.filter((item) => item.value !== data.value),
      ];

      console.log(this.selectedStatuses);
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.messageStore.isStatusHistoryLoading;
    },
  },
  mounted() {
    console.log(this.isLoading);
  },
  watch: {},
});
</script>
