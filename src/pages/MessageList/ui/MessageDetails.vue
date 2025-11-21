<template>
  <!-- <dialog-window
    :toolbarTitle="modalTitle"
    v-if="dialog"
    :key="count"
    :value="dialog"
    @close-click="handleCloseClick"
    :message-data="messageExts"
    :message-files="messageFiles"
    :status-history="statusHistory"
  ></dialog-window> -->
  <dialog-window
    @close-click="handleClose"
    v-if="isOpen"
    :value="isOpen"
  ></dialog-window>
</template>

<script lang="ts" setup>
import DialogWindow from "@/widgets/dialog-window/DialogWindow.vue";
import { useMessageTableModel } from "../model/model";
const { isOpen } = useMessageTableModel();
const emits = defineEmits<{
  (e: `close`): void;
}>();
const handleClose = () => {
  emits(`close`);
};
</script>
