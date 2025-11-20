<template>
  <ext-file-layout-vue title="Файлы">
    <message-file-sort-panel-vue></message-file-sort-panel-vue>
    <message-file-virtual-scroll-vue> </message-file-virtual-scroll-vue>
  </ext-file-layout-vue>
</template>

<script lang="ts">
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import { items } from "./SelectItems";
import { TSortOptions } from "@/shared/types/common/TSortOptions";
import ExtFileLayoutVue from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import MessageFileSortPanelVue from "./MessageFileSortPanel/MessageFileSortPanel.vue";
import MessageFileVirtualScrollVue from "./MessageFileVirtualScroll/MessageFileVirtualScroll.vue";
export default Vue.extend({
  components: {
    ExtFileLayoutVue,
    MessageFileSortPanelVue,
    MessageFileVirtualScrollVue,
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