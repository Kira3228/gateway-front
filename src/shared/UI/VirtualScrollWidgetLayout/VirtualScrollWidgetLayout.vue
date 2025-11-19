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
    <virtual-scroll-vue
      v-else
      :height="height"
      :itemHeight="itemHeight"
      :items="items"
    >
      <template v-slot:item="{ item }">
        <slot name="list-item" :item="item"></slot>
        <!-- <list-item-vue :key="item.id" :item="item">
          <template v-slot:content="{ item }">
            <p class="tw-text-base tw-text-blue-700 tw-font-bold">
              {{ item.fileName }}
            </p>
            <p class="tw-text-base tw-text-gray-600">
              {{ item.filePath }} | {{ item.fileSizeBytes }} байт
            </p>
            <span class="tw-text-sm tw-mt-4"> {{ item.description }} </span>
          </template>
        </list-item-vue> -->
      </template>
    </virtual-scroll-vue>
  </div>
</template>
<script lang="ts">
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import { TStatusHistory } from "@/shared/types/common/TStatusHistory";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import VirtualScrollVue from "../VirtualScroll/VirtualScroll.vue";
export default Vue.extend({
  components: {
    VirtualScrollVue,
  },
  props: {
    skeletonsQuantity: {
      type: Number,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Array as PropType<TMessageFile[] | TStatusHistory[]>,
      default: [],
    },
    skeletonHeight: {
      type: Number,
      default: 90,
    },
    itemHeight: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 750,
    },
  },
});
</script>
