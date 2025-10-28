<template>
  <data-table-vue :headers="headers" :items="items" @click-row="handleRowClick">
    <template v-slot:modal>
      <dialog-window-vue
        v-if="dialog && messageExts.id"
        :key="messageExts.id"
        :value="dialog"
        @close-click="handleCloseClick"
        :message-data="messageExts"
        :message-files="messageFiles"
        :status-history="statusHistory"
      ></dialog-window-vue>
    </template>
  </data-table-vue>
</template>
<script lang="ts">
import { TMessage } from "@/shared/types/messages/TMessage";
import DataTableVue from "@/shared/UI/DataTable/DataTable.vue";
import Vue from "vue";
import DialogWindowVue from "@/widgets/dialog-window/DialogWindow.vue";
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt";
import { TStatusHistory } from "@/shared/types/common/TStatusHistory";
export default Vue.extend({
  name: `MessageListPage`,
  components: {
    DataTableVue,
    DialogWindowVue,
  },
  data() {
    return {
      dialog: false,
    };
  },
  async mounted() {
    await this.$store.dispatch(`messageStore/loadItems`);
    await this.$store.dispatch(`messageStore/getHeaders`);
  },
  methods: {
    async handleRowClick(data: TMessage) {
      try {
        await this.$store.dispatch(`messageStore/getExts`, data.messageId);
        await this.$store.dispatch(`messageStore/getMessageFile`, data.id);
        await this.$store.dispatch(`messageStore/getStatusHistory`, data.id);

        this.dialog = true;
        console.log(`dialog: `, this.dialog);
      } catch (error) {
        console.log(error);
      }
    },
    handleCloseClick(isOpen: boolean) {
      this.dialog = isOpen;
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
  },
  watch: {
    messageExts(newVal) {},
  },
});
</script>
