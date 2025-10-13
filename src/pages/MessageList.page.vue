<template>
  <div>
    <data-table-vue></data-table-vue>
  </div>
</template>
<script lang="ts">
import DataTableVue from "@/shared/UI/DataTable/DataTable.vue";
import Vue from "vue";
export default Vue.extend({
  name: `MessageListPage`,
  components: {
    DataTableVue,
  },
});
</script>