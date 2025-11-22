<template>
  <ext-file-layout title="Файлы">
    <message-file-sort-panel />
    <message-file-virtual-scroll />
  </ext-file-layout>
</template>

<script lang="ts" setup>
import ExtFileLayout from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import MessageFileSortPanel from "./MessageFileSortPanel/MessageFileSortPanel.vue";
import MessageFileVirtualScroll from "./MessageFileVirtualScroll/MessageFileVirtualScroll.vue";
</script>
