<template>
  <v-sheet class="tw-p-3" width="100%">
    <v-card-title> Файлы сообщения </v-card-title>
    <search-bar-vue :items="items" @select-item="handleSort"></search-bar-vue>
    <div class="tw-flex-1">
      <div v-if="isLoading" class="tw-flex tw-flex-col tw-gap-2">
        <v-skeleton-loader max-height="90px" type="card"></v-skeleton-loader>
        <v-skeleton-loader max-height="90px" type="card"></v-skeleton-loader>
        <v-skeleton-loader max-height="90px" type="card"></v-skeleton-loader>
        <v-skeleton-loader max-height="90px" type="card"></v-skeleton-loader>
        <v-skeleton-loader max-height="90px" type="card"></v-skeleton-loader>
        <v-skeleton-loader max-height="90px" type="card"></v-skeleton-loader>
        <v-skeleton-loader max-height="90px" type="card"></v-skeleton-loader>
      </div>
      <virtual-scroll-vue asd="100" v-else :items="files">
        <template v-slot:item="{ item }">
          <list-item-vue :key="item.id" :item="item">
            <template v-slot:content="{ item }">
              <p class="tw-text-base tw-text-blue-700 tw-font-bold">
                {{ item.fileName }}
              </p>
              <p class="tw-text-base tw-text-gray-600">
                {{ item.filePath }} | {{ item.fileSizeBytes }} байт
              </p>
              <span class="tw-text-sm tw-mt-4"> {{ item.description }} </span>
            </template>
          </list-item-vue>
        </template>
      </virtual-scroll-vue>
    </div>
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
import { TSortOptions } from "@/shared/types/common/TSortOptions";
import SearchBarVue from "@/shared/UI/SearchBar/SearchBar.vue";
import SortPanelLayoutVue from "@/shared/UI/SortPanelLayout/SortPanelLayout.vue";
export default Vue.extend({
  components: {
    VirtualScrollVue,
    ListItemVue,
    SelectInputVue,
    TextInputVue,
    SearchBarVue,
    SortPanelLayoutVue,
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
  methods: {
    async handleSort(data: TSortOptions) {
      await this.$store.dispatch(`messageStore/getMessageFile`, {
        id: this.id,
        sortField: data.value.sortField,
        sortOrder: data.value.sortOrder,
      });
    },
  },
  computed: {
    id() {
      return this.$store.state.messageStore.messageId;
    },
    isLoading(): boolean {
      return this.$store.state.messageStore.isFilesLoading;
    },
  },
});
</script>
