<template>
  <ext-data-card title="История изменения">
    <!-- <status-history-sort-panel /> -->
    <status-history-virtual-scroll :error="" :is-loading="" :statuses="" />
  </ext-data-card>
</template>

<script lang="ts" setup>
import ExtDataCard from "@/shared/UI/ExtDataCard/ExtDataCard.vue";
import StatusHistoryVirtualScroll from "./StatusHistoryVirtualScroll/StatusHistoryVirtualScroll.vue";
</script>
