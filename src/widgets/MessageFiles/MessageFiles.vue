<template>
  <v-sheet width="100%">
    <v-card-title> Файлы сообщения </v-card-title>
    <div class="tw-flex tw-gap-6">
      <select-input-vue :items="items"></select-input-vue>
      <text-input-vue placeholder="Поиск" class="tw-flex-1" isSearch></text-input-vue>
    </div>
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
import SelectInputVue from "@/shared/UI/SelectInput/SelectInput.vue";
import { items } from "./SelectItems";
import TextInputVue from "@/shared/UI/TextInput/TextInput.vue";
export default Vue.extend({
  components: {
    VirtualScrollVue,
    ListItemVue,
    SelectInputVue,
    TextInputVue,
  },
  props: {
    files: {
      type: Array as PropType<TMessageFile[]>,
      default: () => [],
    },
  },
  data() {
    return {
      items: items,
    };
  },
});
</script>
