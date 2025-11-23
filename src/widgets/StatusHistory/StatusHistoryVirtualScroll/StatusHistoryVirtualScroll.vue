<template>
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
              <slot name="content" :item="item" />
            </template>
          </list-item>
        </div>
        <div
          v-if="index === statuses.length - 1"
          v-intersect="onIntersect"
          style="height: 1px; width: 100%"
        ></div>
      </dynamic-scroller-item>
    </template>
  </dynamic-scroller>
</template>
<script lang="ts" setup>
import StatusHistoryCard from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import ListItem from "@/shared/UI/ListItem/ListItem.vue";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { TStatusHistoryItem } from "@/entities/statusHistory/model/types";
import { onMounted } from "vue";
interface IProps {
  isLoading: boolean;
  statuses: TStatusHistoryItem[];
  error: string;
}
const props = defineProps<IProps>();

const onIntersect = () => {
  console.log(`Гружу`);
};
</script>
