<template>
  <virtual-scroll-widget-layout-vue
    :height="750"
    :itemHeight="150"
    :items="items"
    :isLoading="isLoading"
    :skeletonsQuantity="6"
  >
    <template #listItem="{ item }">
      <list-item-vue :key="item.id" :item="item">
        <template v-slot:content="{ item }">
          <status-history-card-vue :item="item"></status-history-card-vue>
        </template>
      </list-item-vue>
    </template>
  </virtual-scroll-widget-layout-vue>
</template>
<script lang="ts">
import VirtualScrollVue from "@/shared/UI/VirtualScroll/VirtualScroll.vue";
import Vue from "vue";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
import StatusHistoryCardVue from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import VirtualScrollWidgetLayoutVue from "@/shared/UI/VirtualScrollWidgetLayout/VirtualScrollWidgetLayout.vue";
import store from "@/store";

export default Vue.extend({
  name:`StatusHistoryVirtualScrollWidget`,

  components: {
    VirtualScrollVue,
    ListItemVue,
    StatusHistoryCardVue,
    VirtualScrollWidgetLayoutVue,
  },
  computed: {
    items() {
      return store.state.messageStore.statusHistory;
    },
    isLoading() {
      return store.state.messageStore.isStatusHistoryLoading;
    },
  },
});
</script>
