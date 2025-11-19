<template>
  <ext-file-layout-vue title="История изменения">
    <status-history-sort-panel-vue></status-history-sort-panel-vue>
    <status-history-virtual-scroll-vue>
      <template #scrol-item="{ item }">
        <status-history-card-vue :item="item"></status-history-card-vue>
      </template>
    </status-history-virtual-scroll-vue>
  </ext-file-layout-vue>
</template>

<script lang="ts">
import Vue from "vue";
import ExtFileLayoutVue from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import StatusHistoryCardVue from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import StatusHistorySortPanelVue from "./StatusHistorySortPanel/StatusHistorySortPanel.vue";
import StatusHistoryVirtualScrollVue from "./StatusHistoryVirtualScroll/StatusHistoryVirtualScroll.vue";
export default Vue.extend({
  components: {
    ExtFileLayoutVue,
    StatusHistoryCardVue,
    StatusHistorySortPanelVue,
    StatusHistoryVirtualScrollVue,
  },
});
</script>
