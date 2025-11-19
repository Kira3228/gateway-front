<template>
  <ext-file-layout-vue title="История изменения">
    <status-history-sort-panel-vue></status-history-sort-panel-vue>
    <status-history-virtual-scroll-vue :isLoading="isLoading" :items="items">
      <template #scrol-item="{ item }">
        <status-history-card-vue :item="item"></status-history-card-vue>
      </template>
    </status-history-virtual-scroll-vue>
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
import ExtFileLayoutVue from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import StatusHistoryCardVue from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import TextInputVue from "@/shared/UI/TextInput/TextInput.vue";
import CheckboxVue from "@/shared/UI/Checkbox/Checkbox.vue";
import ButtonGroupVue from "@/shared/UI/ButtonGroup/ButtonGroup.vue";
import StatusHistorySortPanelVue from "./StatusHistorySortPanel/StatusHistorySortPanel.vue";
import StatusHistoryVirtualScrollVue from "./StatusHistoryVirtualScroll/StatusHistoryVirtualScroll.vue";
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
    StatusHistorySortPanelVue,
    StatusHistoryVirtualScrollVue,
  },
  props: {
    items: {
      type: Array as PropType<TStatusHistory[]>,
      default: () => {},
    },
  },

  methods: {
    handleSelect(newValue: TSortOptions) {},
  },
  computed: {
    isLoading() {
      return this.$store.state.messageStore.isStatusHistoryLoading;
    },

    isAdmin: {
      get(): boolean {
        return this.$store.state.messageStore.isAdmin;
      },
      set(newState: boolean) {
        this.$store.commit(`messageStore/SET_IS_ADMIN`, newState);
      },
    },
  },
});
</script>
