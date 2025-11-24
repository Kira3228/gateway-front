<template>
  <ext-data-card title="Файлы">
    <file-order-switch />
    <complex-virtual-scroll
      :error="error"
      :is-loading="isLoading"
      :items="files"
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
import { toRef, watch } from "vue";
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
watch(
  [messageId, fileNameOrder, fileSizeBytesOrder,],
  ([newId]) => {
    if (!newId) {
      return;
    }
    fileStore.refresh();
    fileStore.getMessageFiles(props.id, {
      page: 1,
      fileNameOrder: fileNameOrder.value,
      fileSizeBytesOrder: fileSizeBytesOrder.value,
    });
  },
  { immediate: true, deep: true }
);
watch(page, (newPage) => {
  if (newPage > 1 && messageId.value) {
    fileStore.getMessageFiles(props.id, {
      page: page.value,
      fileNameOrder: fileNameOrder.value,
      fileSizeBytesOrder: fileSizeBytesOrder.value,
    });
  }
});
</script>
