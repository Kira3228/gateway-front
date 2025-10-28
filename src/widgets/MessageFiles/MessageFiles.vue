<template>
  <v-sheet width="100%">
    <v-card-title> Файлы сообщения </v-card-title>
    <virtual-scroll-vue :items="files">
      <template v-slot:item="{ item }">
        <list-item-vue :key="item.id" :item="item">
          <template v-slot:content="{ item }">
            <p class="tw-text-base">{{ item.fileName }}</p>
            <p class="tw-text-base tw-text-gray-600">
              {{ item.filePath }} | {{ item.fileSizeBytes }} байт
            </p>
            <span class="tw-text-sm tw-mt-4">
              {{ item.description }}
            </span>
          </template>
        </list-item-vue>
      </template>
    </virtual-scroll-vue>
  </v-sheet>
</template>

<script lang="ts">
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import VirtualScrollVue from "@/shared/UI/VirtualScroll/VirtualScroll.vue";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
export default Vue.extend({
  components: {
    VirtualScrollVue,
    ListItemVue,
  },
  props: {
    files: {
      type: Array as PropType<TMessageFile[]>,
      default: () => [],
    },
  },
});
</script>
