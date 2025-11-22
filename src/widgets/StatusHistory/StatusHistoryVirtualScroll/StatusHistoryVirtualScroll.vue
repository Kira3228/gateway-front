<template>
  <ComplexVirtualScroll
    :height="750"
    :itemHeight="150"
    :items="statuses"
    :isLoading="isLoading"
    :skeletonsQuantity="6"
    :skeletonHeight="100"
    :error="error"
  >
    <template #listItem="{ item }">
      <list-item-vue :key="item.id" :item="item">
        <template v-slot:content="{ item }">
          <status-history-card :item="item"></status-history-card>
        </template>
      </list-item-vue>
    </template>
  </ComplexVirtualScroll>
</template>
<script lang="ts" setup>
interface IProps {
  isLoading: boolean;
  statuses: TStatusHistoryItem[];
  error: string;
}

const props = defineProps<IProps>();

import StatusHistoryCard from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { TStatusHistoryItem } from "@/entities/statusHistory/model/types";
</script>
