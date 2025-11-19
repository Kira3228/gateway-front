<template>
  <div>
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
      <v-chip :color="getColor(item.oldStatus)">{{ item.oldStatus }}</v-chip>
      <v-icon>mdi-forward</v-icon>
      <v-chip :color="getColor(item.newStatus)">{{ item.newStatus }}</v-chip>
    </div>
    <p>Причина {{ item.reason }}</p>
    <p>{{ item.metadata }}</p>
  </div>
</template>
<script lang="ts">
import { TStatusHistory } from "@/shared/types/common/TStatusHistory";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import { getStatusColor } from "../../utils/getColorForChip";
export default Vue.extend({
  props: {
    item: Object as PropType<TStatusHistory>,
    default: () => {},
  },
  computed: {},
  methods: {
    getColor(status: string): string {
      return getStatusColor(status);
    },
  },
});
</script>
