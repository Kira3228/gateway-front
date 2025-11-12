<template>
  <div>
    <data-table-vue
      :isLoading="isTableLoading"
      :headers="headers"
      :items="items"
      @click-row="handleRowClick"
    >
      <template v-slot:modal>
        <dialog-window-vue
          :toolbarTitle="modalTitle"
          v-if="dialog && messageExts.id"
          :key="messageExts.id"
          :value="dialog"
          @close-click="handleCloseClick"
          :message-data="messageExts"
          :message-files="messageFiles"
          :status-history="statusHistory"
        ></dialog-window-vue>
      </template>
      <template v-slot:select-preset>
        <div class="tw-w-screen tw-flex tw-justify-items-end">
          <select-input-vue
            :items="presetList"
            v-model="selectedPreset"
            placeholder="Режим отображения"
            @debounce="handleSelectChange"
          ></select-input-vue>
        </div>
      </template>
    </data-table-vue>
  </div>
</template>
<script lang="ts">
import { TMessage } from "@/shared/types/messages/TMessage";
import DataTableVue from "@/shared/UI/DataTable/DataTable.vue";
import Vue from "vue";
import DialogWindowVue from "@/widgets/dialog-window/DialogWindow.vue";
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt";
import SelectInputVue from "@/shared/UI/SelectInput/SelectInput.vue";
import { useMessageList } from "@/features/message-list/model";
import { messageDetails } from "@/features/message-exts/model";
export default Vue.extend({
  name: `MessageListPage`,
  components: {
    DataTableVue,
    DialogWindowVue,
    SelectInputVue,
  },
  data() {
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
      } catch (error) {
        console.log(error);
      }
    },
    handleCloseClick(isOpen: boolean) {
      this.dialog = isOpen;
    },
    async handleSelectChange() {
      await this.$store.dispatch(`messageStore/getHeaders`);
    },
  },
  computed: {
    items() {
      return this.messageList.items;
    },
    headers() {
      return this.messageList.headers;
    },

    messageExts(): TMessageExt {
      return this.messageDetails.messageExt;
    },
    messageFiles() {
      return this.messageDetails.messageFiles;
    },
    statusHistory() {
      return this.messageDetails.statusHistory;
    },
    presetList() {
      return this.$store.state.messageStore.presetList;
    },
    selectedPreset: {
      get(): string {
        return this.messageList.selectPreset;
      },
      set(newPreset: string) {
        this.$store.commit(`messageStore/SET_PRESET`, newPreset);
      },
    },
    isTableLoading() {
      return this.messageList.isTableLoading;
    },
  },
});
</script>
