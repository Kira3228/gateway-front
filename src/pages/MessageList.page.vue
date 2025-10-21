<template>
  <data-table-vue :headers="headers" :items="items" @click-row="handleRowClick">
    <template v-slot:modal>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>Детали строки</v-card-title>
          <v-card-text>
            <p>ID: {{ dialogData.messageId }}</p>
            <p>Сообщение: {{ dialogData.messageType }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog = false">Закрыть</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
  </data-table-vue>
</template>
<script lang="ts">
import { TMessage } from "@/shared/types/messages/TMessage";
import DataTableVue from "@/shared/UI/DataTable/DataTable.vue";
import Vue from "vue";
export default Vue.extend({
  name: `MessageListPage`,
  components: {
    DataTableVue,
  },
  data() {
    return {
      dialog: false,
      dialogData: {} as TMessage,
    };
  },
  mounted() {
    this.$store.dispatch(`messageStore/loadItems`);
    this.$store.dispatch(`messageStore/getHeaders`);
  },
  methods: {
    handleRowClick(data: TMessage) {
      this.dialog = true;
      this.dialogData = { ...data };
    },
  },
  computed: {
    items(): TMessage[] {
      return this.$store.state.messageStore.items;
    },
    headers() {
      return this.$store.state.messageStore.headers;
    },
  },
});
</script>
