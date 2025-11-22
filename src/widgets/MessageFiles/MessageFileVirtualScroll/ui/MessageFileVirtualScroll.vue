<template>
  <virtual-scroll-widget-layout
    :height="750"
    :isLoading="isLoading"
    :itemHeight="105"
    :items="files"
    :skeletonHeight="88"
    :skeletonsQuantity="8"
    :error="error"
  >
    <template #listItem="{ item }">
      <list-item :key="item.id" :item="item">
        <template v-slot:content="{ item }">
          <p class="tw-text-base tw-text-blue-700 tw-font-bold">
            {{ item.fileName }}
          </p>
          <p class="tw-text-base tw-text-gray-600">
            {{ item.filePath }} | {{ item.fileSizeBytes }} байт
          </p>
          <span class="tw-text-sm tw-mt-4"> {{ item.description }} </span>
        </template>
      </list-item>
    </template>
  </virtual-scroll-widget-layout>
</template>

<script lang="ts" setup>
import VirtualScrollWidgetLayout from "@/shared/UI/VirtualScrollWidgetLayout/VirtualScrollWidgetLayout.vue";
import ListItem from "@/shared/UI/ListItem/ListItem.vue";
import { useMessageFileVirtualScrollModel } from "../model/model";
import { onMounted } from "vue";

const { files, isLoading, error } = useMessageFileVirtualScrollModel();
</script>
