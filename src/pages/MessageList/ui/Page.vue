<template>
  <div>
    <message-table
      @open-modal="viewMessageDetailsModel.openModal"
    ></message-table>
    <message-details
      @close="viewMessageDetailsModel.closeModal"
    ></message-details>
  </div>
</template>
<script lang="ts" setup>
import MessageTable from "./MessageTable.vue";
import MessageDetails from "./MessageDetails.vue";
import { useViewMessageDetailsModel } from "@/features/viewMessageDetails/model/model";
const viewMessageDetailsModel = useViewMessageDetailsModel();
</script>
