<template>
  <ext-file-layout title="Файлы">
    <!-- <message-file-sort-panel /> -->
    <file-order-switch></file-order-switch>
    <message-file-virtual-scroll
      :files="files"
      :is-loading="isLoading"
      :error="error"
    />
  </ext-file-layout>
</template>

<script lang="ts" setup>
import ExtFileLayout from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import MessageFileSortPanel from "./MessageFileSortPanel/ui/MessageFileSortPanel.vue";
import MessageFileVirtualScroll from "./MessageFileVirtualScroll/ui/MessageFileVirtualScroll.vue";
import { useMessageFileVirtualScrollModel } from "./MessageFileVirtualScroll/model/model";
import FileOrderSwitch from "@/features/fileOrderSwitch/ui/FileOrderSwitch.vue";
const { files, isLoading, error } = useMessageFileVirtualScrollModel();
</script>
