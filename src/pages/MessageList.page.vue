<template>
  <data-table-vue :headers="headers" :items="items"></data-table-vue>
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
  mounted() {
    this.$store.dispatch(`messageStore/loadItems`);
    this.$store.dispatch(`messageStore/getHeaders`);
  },
  methods: {},
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
