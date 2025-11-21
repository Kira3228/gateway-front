<template>
  <div>
    <message-table
      @open-modal="viewMessageDetailsStore.openModal"
    ></message-table>
    <message-details
      @close="viewMessageDetailsStore.closeModal"
    ></message-details>
  </div>
</template>
<script lang="ts" setup>
import MessageTable from "./MessageTable.vue";
import MessageDetails from "./MessageDetails.vue";
import { useMessageTableModel } from "../model/model";
import { useViewMessageDetailsStore } from "@/features/viewMessageDetails/model/store";
const detailsModel = useMessageTableModel();
const viewMessageDetailsStore = useViewMessageDetailsStore();
const handleOpenModal = (messageId: string) => {};
</script>
