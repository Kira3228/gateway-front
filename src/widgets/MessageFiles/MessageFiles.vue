<template>
  <ext-file-layout title="Файлы">
    <file-order-switch />
    <message-file-virtual-scroll
      :error="error"
      :files="files"
      :is-loading="isLoading"
      @load-more="handleLoadMore"
    />
  </ext-file-layout>
</template>

<script lang="ts" setup>
import ExtFileLayout from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import MessageFileVirtualScroll from "./MessageFileVirtualScroll/ui/MessageFileVirtualScroll.vue";
import FileOrderSwitch from "@/features/fileOrderSwitch/ui/FileOrderSwitch.vue";
import { onUnmounted, toRef, watch } from "vue";
import { useMessageFileStore } from "@/entities/messageFile/model/store";
import { useFileOrderSwitchModel } from "@/features/fileOrderSwitch/model/model";
import { storeToRefs } from "pinia";

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
  [messageId, fileNameOrder, fileSizeBytesOrder],
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
