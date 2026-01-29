<template>
  <div class="tw-h-full tw-flex tw-flex-col tw-relative">
    <div
      v-if="isLoading && !items.length"
      class="tw-flex tw-flex-col tw-gap-2 tw-p-2"
    >
      <v-skeleton-loader
        v-for="i in 6"
        :key="i"
        type="article"
        class="tw-mb-2"
      />
    </div>
    <div v-else-if="error" class="tw-p-4 tw-text-red-500 tw-text-center">
      {{ error }}
    </div>
    <dynamic-scroller
      v-else
      class="tw-flex-1 tw-min-h-0"
      :items="items"
      :min-item-size="80"
      key-field="id"
    >
      <template v-slot="{ item, index, active }">
        <dynamic-scroller-item
          :item="item"
          :active="active"
          :data-index="index"
          :size-dependencies="[item.fileName]"
        >
          <div>
            <slot name="content" :item="item" />
          </div>

          <div
            v-if="index === items.length - 1"
            v-intersect="onIntersect"
            class="tw-h-1 tw-w-full"
          />
        </dynamic-scroller-item>
      </template>
    </dynamic-scroller>
    <div
      v-if="isLoading && items.length"
      class="tw-p-2 tw-text-center tw-text-xs tw-text-gray-500"
    >
      Загрузка...
    </div>
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
