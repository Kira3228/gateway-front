<template>
  <div class="tw-h-full">
    <message-table @open-modal="model.openModal"></message-table>
    <message-details v-if="model.isOpen.value" @close="model.closeModal" />
  </div>
</template>
<script lang="ts" setup>
import MessageTable from "./MessageTable.vue";
import MessageDetails from "./MessageDetails.vue";
import { useViewMessageDetailsModel } from "@/features/viewMessageDetails/model/model";
const model = useViewMessageDetailsModel();
const handleOpenDetails = () => {};
</script>
