<template>
  <!-- <ComplexVirtualScroll
    :height="750"
    :itemHeight="150"
    :items="statuses"
    :isLoading="isLoading"
    :skeletonsQuantity="6"
    :skeletonHeight="100"
    :error="error"
  >
    <template #listItem="{ item }">
      <list-item :key="item.id" :item="item">
        <template v-slot:content="{ item }">
          <status-history-card :item="item"></status-history-card>
        </template>
      </list-item>
    </template>
  </ComplexVirtualScroll> -->
  <dynamic-scroller
    class="tw-flex-1 tw-min-h-0"
    :items="statuses"
    :min-item-size="150"
  >
    <template v-slot="{ item, index, active }">
      <dynamic-scroller-item
        :item="item"
        :active="active"
        :size-dependencies="[item.id]"
        :data-index="index"
      >
        <div class="my-item tw-flex tw-flex-col">
          <list-item :key="item.id" :item="item">
            <template v-slot:content="{ item }">
              <status-history-card :item="item"></status-history-card>
            </template>
          </list-item>
        </div>
      </dynamic-scroller-item>
    </template>
  </dynamic-scroller>
</template>
<script lang="ts" setup>
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
interface IProps {
  isLoading: boolean;
  statuses: TStatusHistoryItem[];
  error: string;
}

const props = defineProps<IProps>();

import StatusHistoryCard from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import ListItem from "@/shared/UI/ListItem/ListItem.vue";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { TStatusHistoryItem } from "@/entities/statusHistory/model/types";
import { onMounted } from "vue";
onMounted(() => {
  console.log(`статусы`, props.statuses);
});
</script>
