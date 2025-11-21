<template>
  <div class="tw-flex-1">
    <div v-if="isLoading" class="tw-flex tw-flex-col tw-gap-2">
      <v-skeleton-loader
        v-for="skeleton in skeletonsQuantity"
        :key="skeleton"
        :max-height="skeletonHeight"
        type="card"
      ></v-skeleton-loader>
    </div>
    <virtual-scroll
      v-else
      :height="height"
      :itemHeight="itemHeight"
      :items="items"
    >
      <template v-slot:item="{ item }">
        <slot name="listItem" :item="item"></slot>
      </template>
    </virtual-scroll>
  </div>
</template>
<script lang="ts" setup generic="T">
import VirtualScroll from "../VirtualScroll/VirtualScroll.vue";

interface IProps {
  skeletonsQuantity: number;
  isLoading: boolean;
  items: T;
  skeletonHeight: number;
  itemHeight: number;
  height: number;
}
defineProps<IProps>();
</script>
