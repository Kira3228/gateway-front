<template>
  <v-virtual-scroll
    :bench="0"
    max-width="auto"
    :height="height"
    :item-height="itemHeight"
    class="flex-grow-1"
    :items="items"
    style="min-height: 0"
  >
    <template v-slot:default="{ item }">
      <slot name="item" :item="item"></slot>
    </template>
  </v-virtual-scroll>
</template>
<script lang="ts" setup generic="T">
interface IVirtualScrollProps {
  items: T;
  itemHeight: number;
  height: number;
}

defineProps<IVirtualScrollProps>();
</script>
