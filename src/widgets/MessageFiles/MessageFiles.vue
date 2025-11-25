<template>
  <ext-data-card title="Файлы">
    <file-order-switch />
    <complex-virtual-scroll
      :error="error"
      :is-loading="isLoading"
      :items="files.files"
      :skeleton-height="100"
      :skeletons-quantity="10"
      @load-more="onScrollLoadMore"
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
import { computed, onMounted, onUnmounted, toRef, watch } from "vue";
import { useMessageFileStore } from "@/entities/messageFile/model/store";
import { storeToRefs } from "pinia";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { component } from "vue/types/umd";

interface IProps {
  id: string;
}

const props = defineProps<IProps>();
const messageId = toRef(props, "id");

const { fileNameOrder, fileSizeBytesOrder } = useFileOrderSwitchModel();
const fileStore = useMessageFileStore();

const { files, error, isLoading, page } = storeToRefs(fileStore);

const reloadParams = computed(() => ({
  id: messageId.value,
  fileNameOrder: fileNameOrder.value,
  fileSizeBytesOrder: fileSizeBytesOrder.value,
}));

watch(
  reloadParams,
  (newParams) => {
    if (!newParams.id) return;

    fileStore.getMessageFiles(
      newParams.id,
      {
        fileNameOrder: newParams.fileNameOrder,
        fileSizeBytesOrder: newParams.fileSizeBytesOrder,
        limit: 10,
      },
      true
    );
  },
  {
    immediate: true,
    deep: true,
  }
);

const onScrollLoadMore = () => {
  fileStore.loadMore(messageId.value, {
    fileNameOrder: fileNameOrder.value,
    fileSizeBytesOrder: fileSizeBytesOrder.value,
    limit: 10,
  });
};

onUnmounted(() => {
  fileStore.resetState();
});
</script>
