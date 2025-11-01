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
    };
  },
  async mounted() {
    await this.$store.dispatch(`messageStore/getHeaders`);
    await this.$store.dispatch(`messageStore/loadItems`);
    await this.$store.dispatch(`messageStore/getPresetNames`);
  },
  methods: {
    async handleRowClick(data: TMessage) {
      try {
        await this.$store.dispatch(`messageStore/getExts`, data.messageId);
        await this.$store.dispatch(`messageStore/getMessageFile`, { id: data.id });
        await this.$store.dispatch(`messageStore/getStatusHistory`, data.id);
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
    items(): TMessage[] {
      return this.$store.state.messageStore.items;
    },
    headers() {
      return this.$store.state.messageStore.headers;
    },
    messageExts(): TMessageExt {
      const data = this.$store.getters["messageStore/messages"];
      return data;
    },
    formattedData() {
      return this.$store.getters["messageStore/messages"];
    },
    messageFiles() {
      return this.$store.state.messageStore.files;
    },
    statusHistory() {
      // const history = this.$store.state.messageStore.statusHistory ;
      const history = this.$store.getters["messageStore/formatedHistory"];
      console.log(`ЖОПА`, history);

      return history;
    },
    presetList() {
      return this.$store.state.messageStore.presetList;
    },
    selectedPreset: {
      get(): string {
        return this.$store.state.messageStore.preset;
      },
      set(newPreset: string) {
        this.$store.commit(`messageStore/SET_PRESET`, newPreset);
      },
    },
    isTableLoading() {
      return this.$store.state.messageStore.isTableLoading;
    },
  },
  watch: {
    messageExts(newVal) {},
  },
});
</script>
