<template>
  <ext-file-layout-vue title="История изменения">
    <div class="tw-gap-4 tw-items-center">
      <select-input-vue :items="[]" @debounce="handleSelect"></select-input-vue>
      <select-input-vue
        chips
        multiple
        v-model="selectedStatuses2"
        :items="statusHistoryOptions"
        @debounce="() => {}"
      >
        <template #selectedChip="{ item, index }">
          <v-chip
            v-if="index === 0"
            close
            @click:close="handleRemoveChip(index)"
            :color="getColor(item.label)"
          >
            {{ item.label }}
          </v-chip>
          <span v-if="index === 1">(+{{ selectedStatuses2.length }} выбрано)</span>
        </template>
      </select-input-vue>
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
export default Vue.extend({
  components: {
    VirtualScrollVue,
    ListItemVue,
    SearchBarVue,
    AutocompliteVue,
    SelectInputVue,
    ExtFileLayoutVue,
    StatusHistoryCardVue,
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
    getColor(status: string): string {
      return getStatusColor(status);
    },

    handleSelect(newValue: TSortOptions) {
      this.$emit(`select-item`, newValue);
    },
    handleRemoveChip(index: number) {
      const newStatuses = [...this.selectedStatuses2];
      console.log("handleRemoveChip", newStatuses);

      newStatuses.splice(index, 1);
      this.$store.commit("messageStore/SET_SELECTED_STATUSES", newStatuses);
    },
  },
  computed: {
    isLoading() {
      return this.$store.state.messageStore.isStatusHistoryLoading;
    },
    selectedStatuses2: {
      get(): TOption[] {
        return this.$store.state.messageStore.selectedStatuses;
      },
      set(newStatus: any) {
        console.log(`newStatus`, newStatus);

        this.$store.commit(`messageStore/SET_SELECTED_STATUSES`, newStatus);
      },
    },
  },
  mounted() {
    console.log(this.selectedStatuses2);
  },
  watch: {
    selectedStatuses(value) {
      console.log(value);
    },
  },
});
</script>
