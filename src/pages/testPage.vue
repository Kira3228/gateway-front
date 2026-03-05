<template>
  <div class="tw-h-full">
    <DynamicScroller
      :items="items"
      :min-item-size="54"
      class="tw-h-full tw-overflow-y-auto"
    >
      <template v-slot="{ item, index, active }">
        <DynamicScrollerItem
          :item="item"
          :active="active"
          :size-dependencies="[item.message]"
          :data-index="index"
        >
          <div class="tw-h-32">{{ item.id }}</div>
          <div class="text">{{ item.message }}</div>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
const items = ref([
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
]);
</script>
