<template>
  <v-virtual-scroll
    :bench="0"
    max-width="auto"
    height="706"
    :item-height="asd"
    class="flex-grow-1"
    :items="items"
    style="min-height: 0"
  >
    <template v-slot:default="{ item }">
      <slot name="item" :item="item"></slot>
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
    asd: {
      type: String,
      default: "100px",
    },
  },
  computed: {},
});
</script>
