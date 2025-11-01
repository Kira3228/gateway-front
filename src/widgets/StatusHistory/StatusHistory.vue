<template>
  <v-sheet class="tw-p-3" width="100%">
    <v-card-title> Итория изменений </v-card-title>
    <search-bar-vue></search-bar-vue>
    <div v-if="isLoading" class="tw-flex tw-flex-col tw-gap-2">
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
      <v-skeleton-loader max-height="110px" type="card"></v-skeleton-loader>
    </div>
    <virtual-scroll-vue v-else :items="items">
      <template v-slot:item="{ item }">
        <list-item-vue :key="item.id" :item="item">
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
              <v-chip color="red">{{ item.oldStatus }}</v-chip>
              <v-icon>mdi-forward</v-icon>
              <v-chip color="green">{{ item.newStatus }}</v-chip>
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
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import VirtualScrollVue from "@/shared/UI/VirtualScroll/VirtualScroll.vue";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
import SearchBarVue from "@/shared/UI/SearchBar/SearchBar.vue";
export default Vue.extend({
  components: { VirtualScrollVue, ListItemVue, SearchBarVue },
  props: {
    items: {
      type: Array as PropType<TStatusHistory[]>,
      default: () => {},
    },
  },
  methods: {
    getColor(isActive: boolean): `green` | `red` {
      return isActive ? `green` : `red`;
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
});
</script>
