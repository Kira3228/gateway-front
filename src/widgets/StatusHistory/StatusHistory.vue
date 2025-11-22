<template>
  <ext-file-layout title="История изменения">
    <status-history-sort-panel />
    <status-history-virtual-scroll>
      <template #scrol-item="{ item }">
        <status-history-card :item="item" />
      </template>
    </status-history-virtual-scroll>
  </ext-file-layout>
</template>

<script lang="ts" setup>
import ExtFileLayout from "@/shared/UI/ExtFileLayout/ExtFileLayout.vue";
import StatusHistoryCard from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import StatusHistorySortPanel from "./StatusHistorySortPanel/StatusHistorySortPanel.vue";
import StatusHistoryVirtualScroll from "./StatusHistoryVirtualScroll/StatusHistoryVirtualScroll.vue";
</script>
