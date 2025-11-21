<template>
  <dialog-window
    :value="viewMessageDetailsModel.isOpen.value"
    @input="onInput"
    @close="onClose"
    :message-data=""
    :message-files=""
    :toolbar-title="title"
  ></dialog-window>
</template>

<script lang="ts" setup>
import DialogWindow from "@/widgets/dialog-window/DialogWindow.vue";
import { useViewMessageDetailsModel } from "@/features/viewMessageDetails/model/model";

const emits = defineEmits<{
  (e: `close`): void;
}>();

const viewMessageDetailsModel = useViewMessageDetailsModel();
const title = `ID: ${viewMessageDetailsModel.currentId}`;

const onInput = (val: boolean) => {
  if (!val) viewMessageDetailsModel.closeModal();
};

const onClose = () => {
  viewMessageDetailsModel.closeModal();
};
</script>
