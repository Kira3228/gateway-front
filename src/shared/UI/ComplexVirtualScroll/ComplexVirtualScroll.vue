<template>
  <div class="tw-flex tw-flex-1 tw-min-h-0">
    <div v-if="isLoading" class="tw-flex tw-flex-col tw-gap-2">
      <v-skeleton-loader
        v-for="skeleton in skeletonsQuantity"
        :key="skeleton"
        :max-height="skeletonHeight"
        type="card"
      ></v-skeleton-loader>
    </div>
    <div v-else-if="error">
      {{ error }}
    </div>
    <dynamic-scroller
      class="tw-flex-1 tw-min-h-0"
      :items="items"
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
                <slot name="content" :item="item"></slot>
              </template>
            </list-item>
          </div>
          <div
            v-if="index === items.length - 1"
            v-intersect="onIntersect"
            style="height: 1px; width: 100%"
          ></div>
        </dynamic-scroller-item>
      </template>
    </dynamic-scroller>
  </div>
</template>
<script lang="ts" setup generic="T">
import ListItem from "../ListItem/ListItem.vue";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
interface IProps {
  skeletonsQuantity: number;
  isLoading: boolean;
  skeletonHeight: number;
  items: T[];
  error: string | undefined;
}
defineProps<IProps>();
const emit = defineEmits<{
  (e: `load-more`): void;
}>();

const onIntersect = () => {
  emit("load-more");
};
</script>
