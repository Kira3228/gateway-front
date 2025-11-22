<template>
  <v-dialog
    fullscreen
    hide-overlay
    :value="value"
    @input="onDialogInput"
    @keydown="close"
    @click:outside="close"
    transition="dialog-bottom-transition"
  >
    <v-card class="dialog-root">
      <v-toolbar class="flex-grow-0" dark color="primary">
        <v-btn icon dark @click="onDialogInput(false)"
          ><v-icon>mdi-close</v-icon></v-btn
        >
        <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
        <v-spacer />
        <v-btn color="green" @click="() => {}">Повторная отправка</v-btn>
      </v-toolbar>

      <div class="dialog-content tw-gap-2 tw-flex-row tw-flex-1">
        <message-data-card :messageData="messageData" />
        <v-divider vertical />
        <message-files :id="id" />
        <v-divider vertical />
        <!-- <status-history /> -->
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import MessageDataCard from "@/widgets/MessageData/MessageDataCard.vue";
import MessageFiles from "@/widgets/MessageFiles/MessageFiles.vue";
import { TMessageExt } from "@/entities/messageExt/model/types";
import { TStatusHistoryItem } from "@/entities/statusHistory/model/types";

interface IDialogWindowProps {
  value: boolean;
  id: string;
  messageData: TMessageExt;
  statusHistory: TStatusHistoryItem[];
  toolbarTitle: string;
}

const props = withDefaults(defineProps<IDialogWindowProps>(), {
  id: "",
  toolbarTitle: "",
  value: false,
  messageData: () => ({
    id: 0,
    createdAt: new Date(0),
    receiving_at: new Date(0),
    received_at: new Date(0),
    sending_at: new Date(0),
    sent_at: new Date(0),
    delivered_at: new Date(0),
    read_at: null,
    totalFilesCount: 0,
    totalSizeBytes: 0,
    checksum: "",
    metadata: "",
  }),
  messageFiles: () => [],
  statusHistory: () => [],
});

const emit = defineEmits<{
  (e: `input`, value: boolean): void;
  (e: `close`, value: boolean): void;
}>();

const onDialogInput = (newValue: boolean) => {
  emit("input", newValue);
};
const close = () => {
  emit(`input`, false);
  emit(`close`, false);
};
</script>

<style lang="scss" scoped>
.dialog-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.dialog-content {
  flex: 1 1 auto;
  display: flex;
  min-height: 0;
}
.left-card {
  width: auto;
  flex-shrink: 0;
  height: 100%;
}
.scroll-card,
.virtual-scroll {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
.card {
  margin: 10px 0px 0px 16px;
  display: flex;
  gap: 10px;
}
.header {
  font-weight: bold;
}
.card-text {
  font-size: 15px;
}
.wrap-text {
  word-break: break-all;
}
</style>
