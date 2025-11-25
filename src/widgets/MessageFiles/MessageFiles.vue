<template>
  <ext-data-card title="Файлы">
    <file-order-switch />
    <complex-virtual-scroll
      :error="error"
      :is-loading="isLoading"
      :items="files.files"
      :skeleton-height="100"
      :skeletons-quantity="10"
      @load-more="handleLoadMore"
    >
      <template #content="{ item }">
        <p class="tw-text-base tw-text-blue-700 tw-font-bold">
          {{ item.fileName }}
        </p>
        <p class="tw-text-base tw-text-gray-600">
          {{ item.filePath }} | {{ item.fileSizeBytes }} байт
        </p>
        <span class="tw-text-sm tw-mt-4"> {{ item.description }} </span>
      </template>
    </complex-virtual-scroll>
  </ext-data-card>
</template>

<script lang="ts" setup>
import ExtDataCard from "@/shared/UI/ExtDataCard/ExtDataCard.vue";
import {
  FileOrderSwitch,
  useFileOrderSwitchModel,
} from "@/features/fileOrderSwitch/";
import { onMounted, onUnmounted, toRef, watch } from "vue";
import { useMessageFileStore } from "@/entities/messageFile/model/store";
import { storeToRefs } from "pinia";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";

interface IProps {
  id: string;
}

const props = defineProps<IProps>();
const messageId = toRef(props, "id");

const { fileNameOrder, fileSizeBytesOrder } = useFileOrderSwitchModel();
const fileStore = useMessageFileStore();

const { files, error, isLoading, page } = storeToRefs(fileStore);

const handleLoadMore = () => {
  fileStore.incrementPage();
};

// onMounted(() => {
//   fileStore.getMessageFiles(props.id, {
//     limit: 5,
//     page: page.value,
//     fileNameOrder: fileNameOrder.value,
//     fileSizeBytesOrder: fileSizeBytesOrder.value,
//   });
// });
// onMounted(() => {
//   fileStore.refresh();
// });
onUnmounted(() => {});

// watch([messageId, fileNameOrder, fileSizeBytesOrder], async ([newId]) => {
//   if (!newId) {
//     return;
//   }
//   fileStore.refresh();
//   await fileStore.getMessageFiles(props.id, {
//     page: 1,
//     fileNameOrder: fileNameOrder.value,
//     fileSizeBytesOrder: fileSizeBytesOrder.value,
//     limit: 1,
//   });
// });
// watch(page, (newPage) => {
//   if (newPage > 1 && messageId.value) {
//   }
// });
</script>
