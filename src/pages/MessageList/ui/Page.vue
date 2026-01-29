<template>
  <div class="tw-h-full">
    <message-list-filters />
    <message-table @open-modal="model.openModal" />
    <message-details v-if="model.isOpen.value" @close="model.closeModal" />
  </div>
</template>
<script lang="ts" setup>
import MessageTable from "./MessageTable.vue";
import MessageDetails from "./MessageDetails.vue";
import { useViewMessageDetailsModel } from "@/features/viewMessageDetails";
import MessageListFilters from "./MessageListFilters.vue";
const model = useViewMessageDetailsModel();
</script>
