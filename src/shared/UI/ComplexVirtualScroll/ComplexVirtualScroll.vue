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
    <div v-else-if="error">
      {{ error }}
    </div>
    <v-virtual-scroll
      v-else
      :bench="0"
      max-width="auto"
      :height="height"
      :item-height="itemHeight"
      :items="items"
      class="flex-grow-1"
      style="min-height: 0"
    >
      <template #default="{ item, index }">
        <slot name="listItem" :item="item" :index="index"></slot>
      </template>
    </v-virtual-scroll>
  </div>
</template>
<script lang="ts" setup generic="T">
interface IProps {
  skeletonsQuantity: number;
  isLoading: boolean;
  skeletonHeight: number;
  items: T;
  itemHeight: number;
  height: number;
  error: string | undefined;
}
defineProps<IProps>();
</script>
