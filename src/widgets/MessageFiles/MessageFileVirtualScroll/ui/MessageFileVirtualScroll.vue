<template>
  <complex-virtual-scroll
    :height="750"
    :isLoading="isLoading"
    :itemHeight="105"
    :items="files"
    :skeletonHeight="88"
    :skeletonsQuantity="8"
    :error="error"
  >
    <template #content="{ item }">
      <p class="tw-text-base tw-text-blue-700 tw-font-bold">
        {{ item.fileName }}
      </p>
      <p class="tw-text-base tw-text-gray-600">
        {{ item.filePath }} | {{ item.fileSizeBytes }} байт
      </p>
      <span class="tw-text-sm tw-mt-4"> {{ item.description }} </span></template
    >
  </complex-virtual-scroll>
</template>

<script lang="ts" setup>
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import ListItem from "@/shared/UI/ListItem/ListItem.vue";

interface IProps {
  isLoading: boolean;
  files: TMessageFile[];
  error: string;
}
const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: `load-more`, data: any): void;
}>();

const onIntersect = (data: any) => {
  emit(`load-more`, data);
};
</script>
