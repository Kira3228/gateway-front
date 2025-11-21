<template>
  <data-table-vue
    :isLoading="isTableLoading"
    :headers="headers"
    :items="items"
    @click-row="handleRowClick"
  >
    <template v-slot:modal> </template>
    <template v-slot:select-preset>
      <div class="tw-w-screen tw-flex tw-justify-items-end">
        <preset-vue></preset-vue>
      </div>
    </template>
  </data-table-vue>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    items() {},
    headers() {},
  },
});
</script>
