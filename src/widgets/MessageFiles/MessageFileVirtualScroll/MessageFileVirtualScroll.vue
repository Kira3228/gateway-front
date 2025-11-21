<template>
  <virtual-scroll-widget-layout-vue
    :height="750"
    :isLoading="isLoading"
    :itemHeight="105"
    :items="items"
    :skeletonHeight="88"
    :skeletonsQuantity="8"
  >
    <template #listItem="{ item }">
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
  </virtual-scroll-widget-layout-vue>
</template>
<script lang="ts">
import VirtualScrollWidgetLayoutVue from "@/shared/UI/VirtualScrollWidgetLayout/VirtualScrollWidgetLayout.vue";
import store from "@/store";
import Vue from "vue";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
export default Vue.extend({
  components: {
    VirtualScrollWidgetLayoutVue,
    ListItemVue,
  },
  computed: {
    isLoading() {
      return false;
    },
    items() {
      return store.state.messageStore.files;
    },
  },
  mounted() {
  },
});
</script>
