<template>
  <ext-file-layout title="Файлы">
    <file-order-switch />
    <message-file-virtual-scroll />
  </ext-file-layout>
</template>

<script lang="ts" setup>
import ExtFileLayout from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import MessageFileVirtualScroll from "./MessageFileVirtualScroll/ui/MessageFileVirtualScroll.vue";
import FileOrderSwitch from "@/features/fileOrderSwitch/ui/FileOrderSwitch.vue";
import { toRef, watch } from "vue";
import { useMessageFileStore } from "@/entities/messageFile/model/store";
import { useFileOrderSwitchModel } from "@/features/fileOrderSwitch/model/model";

interface IProps {
  id: string;
}

const props = defineProps<IProps>();
const messageId = toRef(props, "id");

const { fileNameOrder, fileSizeBytesOrder } = useFileOrderSwitchModel();
const fileModel = useMessageFileStore();

watch(
  [messageId, fileNameOrder, fileSizeBytesOrder],
  ([newId]) => {
    if (!newId) {
      return;
    }
    console.log(`Загрузка данных`);
    fileModel.getMessageFiles(props.id, {
      fileNameOrder: fileNameOrder.value,
      fileSizeBytesOrder: fileSizeBytesOrder.value,
    });
  },
  { immediate: true, deep: true }
);
</script>
