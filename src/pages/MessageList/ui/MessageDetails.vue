<template>
  <dialog-window
    :toolbarTitle="modalTitle"
    v-if="dialog"
    :key="count"
    :value="dialog"
    @close-click="handleCloseClick"
    :message-data="messageExts"
    :message-files="messageFiles"
    :status-history="statusHistory"
    >{{ dialog }}</dialog-window
  >
</template>

<script lang="ts" setup>
import DialogWindow from "@/widgets/dialog-window/DialogWindow.vue";
import { onMounted, ref } from "vue";
const modalTitle =
</script>
