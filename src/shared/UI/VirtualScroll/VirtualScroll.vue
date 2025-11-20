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
    <template v-slot:default="{ item, index }">
      <slot name="item" :item="item"></slot>
      <div
        v-if="index === items.length - 1"
        v-intersect="onIntersect"
        style="height: 1px; width: 100%"
      ></div>
    </template>
  </v-virtual-scroll>
</template>
<script lang="ts">
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import { TStatusHistory } from "@/shared/types/common/TStatusHistory";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
export default Vue.extend({
  name: `VirtualScroll`,
  props: {
    items: {
      type: Array as PropType<TMessageFile[] | TStatusHistory[]>,
      default: () => [],
    },
    isItemLoading: {
      type: Boolean,
      default: false,
    },
    itemHeight: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 706,
    },
  },
  computed: {},
  methods: {
    onIntersect() {
      this.$emit(`scroll-end`);
    },
  },
});
</script>
