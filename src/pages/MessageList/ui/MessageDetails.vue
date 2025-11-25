<template>
  <dialog-window
    :value="viewMessageDetailsModel.isOpen.value"
    @input="onInput"
    @close="onClose"
    :message-data="messageData"
    :status-history="statusHistory"
    :toolbar-title="title"
    :id="id"
  />
</template>

<script lang="ts" setup>
import DialogWindow from "@/widgets/dialog-window/ui/DialogWindow.vue";
import { useViewMessageDetailsModel } from "@/features/viewMessageDetails";
import { computed, onMounted } from "vue";

const emits = defineEmits<{
  (e: `close`): void;
}>();

const viewMessageDetailsModel = useViewMessageDetailsModel();
const id = computed(() => viewMessageDetailsModel.currentId.value);
const title = computed(() => `ID: ${viewMessageDetailsModel.currentId.value}`);

const messageData = viewMessageDetailsModel.extMessage;
const statusHistory = viewMessageDetailsModel.statusHistory;

const onInput = (val: boolean) => {
  if (!val) viewMessageDetailsModel.closeModal();
};
const onClose = () => {
  viewMessageDetailsModel.closeModal();
};
</script>
