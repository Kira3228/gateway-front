<template>
  <div class="tw-h-full">
    <message-list-filters />
    <message-table @open-modal="model.openModal" />
  </div>
</template>
<script lang="ts" setup>
import MessageTable from "./MessageTable.vue";
import { useViewMessageDetailsModel } from "@/features/viewMessageDetails";
import MessageListFilters from "./MessageListFilters.vue";
const model = useViewMessageDetailsModel();
</script>
