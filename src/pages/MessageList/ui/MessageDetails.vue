<template>
  <dialog-window
    :value="viewMessageDetailsModel.isOpen.value"
    @input="onInput"
    @close="onClose"
    :message-data="messageData"
    :message-files="messageFiles"
    :status-history="statusHistory"
    :toolbar-title="title"
  ></dialog-window>
</template>

<script lang="ts" setup>
import DialogWindow from "@/widgets/dialog-window/ui/DialogWindow.vue";
import { useViewMessageDetailsModel } from "@/features/viewMessageDetails/model/model";

const emits = defineEmits<{
  (e: `close`): void;
}>();

const viewMessageDetailsModel = useViewMessageDetailsModel();
const title = `ID: ${viewMessageDetailsModel.currentId}`;
const messageData = viewMessageDetailsModel.extMessage;
const messageFiles = viewMessageDetailsModel.files;
const statusHistory = viewMessageDetailsModel.statusHistory;

const onInput = (val: boolean) => {
  if (!val) viewMessageDetailsModel.closeModal();
};

const onClose = () => {
  viewMessageDetailsModel.closeModal();
};
</script>
