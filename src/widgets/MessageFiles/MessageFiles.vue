<template>
  <ext-file-layout title="Файлы">
    <!-- <message-file-sort-panel /> -->
    <file-order-switch />
    <message-file-virtual-scroll :id="id" />
  </ext-file-layout>
</template>

<script lang="ts" setup>
import ExtFileLayout from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import MessageFileVirtualScroll from "./MessageFileVirtualScroll/ui/MessageFileVirtualScroll.vue";
import FileOrderSwitch from "@/features/fileOrderSwitch/ui/FileOrderSwitch.vue";
import { toRef, watch } from "vue";
import { useMessageFileStore } from "@/entities/messageFile/model/store";

interface IProps {
  id: string;
}

const props = defineProps<IProps>();
const messageId = toRef(props, "id");

const fileStore = useMessageFileStore();

watch([messageId], ([newId]) => {
  if (!newId) {
  }
});
</script>
