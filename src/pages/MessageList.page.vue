<template>
  <data-table-vue :headers="headers" :items="items" @click-row="handleRowClick">
    <template v-slot:modal>
      <dialog-window-vue
        v-if="dialog && messageExts.id"
        :key="messageExts.id"
        :value="dialog"
        @close-click="handleCloseClick"
        :messageData="messageExts"
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
    console.log(`Отформатировано`, this.formattedData);
  },
  methods: {
    async handleRowClick(data: TMessage) {
      try {
        await this.$store.dispatch(`messageStore/getExts`, data.messageId);

        this.dialog = true;
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
  },
  watch: {
    messageExts(newVal) {},
  },
});
</script>
