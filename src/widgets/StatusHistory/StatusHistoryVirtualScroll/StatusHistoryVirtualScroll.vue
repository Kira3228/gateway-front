<template>
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
            <slot name="scrol-item" :item="item"></slot>
          </template>
        </list-item-vue>
      </template>
    </virtual-scroll-vue>
  </div>
</template>
<script lang="ts">
import VirtualScrollVue from "@/shared/UI/VirtualScroll/VirtualScroll.vue";
import Vue from "vue";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
import StatusHistoryCardVue from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import store from "@/store";
export default Vue.extend({
  components: { VirtualScrollVue, ListItemVue, StatusHistoryCardVue },
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
