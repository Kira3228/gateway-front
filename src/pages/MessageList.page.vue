<template>
  <data-table-vue :headers="headers" :items="items" @click-row="handleRowClick">
    <template v-slot:modal>
      <dialog-window-vue
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
      const data = this.$store.state.messageStore.ext;
      console.log(`computed`, data);

      return data;
    },
  },
  watch: {
    messageExts(newVal) {
      console.log(123132213123, newVal);
    },
  },
});
</script>
