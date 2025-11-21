<template>
  <div>
    <message-table-vue @open-modal="handleOpenModal"></message-table-vue>
    <message-details-vue></message-details-vue>
  </div>
</template>
<script lang="ts">
import { TMessage } from "@/shared/types/messages/TMessage";
import DataTableVue from "@/shared/UI/DataTable/DataTable.vue";
import Vue from "vue";
import DialogWindowVue from "@/widgets/dialog-window/DialogWindow.vue";
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt";
import SelectInputVue from "@/shared/UI/SelectInput/SelectInput.vue";
import { useMessageList } from "@/features/messageList/model";
import { messageDetails } from "@/features/messageExts/model";
import PresetVue from "@/features/preset/ui/Preset.vue";
import MessageTableVue from "./MessageTable.vue";
import MessageDetailsVue from "./MessageDetails.vue";

type MessageListStore = ReturnType<typeof useMessageList>;
type MessageDetailsStore = ReturnType<typeof messageDetails>;

interface MessageListPageData {
  dialog: boolean;
  modalTitle: string;
  messageList: MessageListStore;
  messageDetails: MessageDetailsStore;
}

interface MessageListPageMethods {
  handleRowClick(data: TMessage): Promise<void>;
  handleCloseClick(isOpen: boolean): void;
  handleSelectChange(): Promise<void>;
  handleOpenModal(messageId: number): void;
}

interface MessageListPageComputed {}
export default Vue.extend<
  MessageListPageData,
  MessageListPageMethods,
  MessageListPageComputed
>({
  name: `MessageListPage`,
  components: {
    DataTableVue,
    DialogWindowVue,
    SelectInputVue,
    PresetVue,
    MessageTableVue,
    MessageDetailsVue,
  },
  data(): MessageListPageData {
    return {
      dialog: false,
      modalTitle: "",
      messageList: useMessageList(),
      messageDetails: messageDetails(),
    };
  },
  async mounted() {
    await this.messageList.init();
  },
  methods: {
    async handleRowClick(data: TMessage) {
      try {
        this.messageDetails.loadDetails(data);
        this.modalTitle = `ID: ${data.messageId}`;
        this.dialog = true;
      } catch (error) {}
    },
    handleCloseClick(isOpen: boolean) {
      this.dialog = isOpen;
    },
    async handleSelectChange() {
      await this.$store.dispatch(`messageStore/getHeaders`);
    },
    handleOpenModal(messageId: number) {
      console.log(messageId);
    },
  },
  computed: {},
});
</script>
