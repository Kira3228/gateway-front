<template>
  <ext-data-card title="История изменения">
    <!-- <status-history-sort-panel /> -->
    <status-history-virtual-scroll
      :error="error"
      :is-loading="isLoading"
      :statuses="statusHistory"
    />
  </ext-data-card>
</template>

<script lang="ts" setup>
import ExtDataCard from "@/shared/UI/ExtDataCard/ExtDataCard.vue";
import StatusHistoryVirtualScroll from "./StatusHistoryVirtualScroll/StatusHistoryVirtualScroll.vue";
import { toRef, watch } from "vue";
import { useStatusHistoryOrderSwitchModel } from "@/features/statusHistoryOrderSwitch/model/model";
import { useStatusHistoryStore } from "@/entities/statusHistory/model/store";
import { storeToRefs } from "pinia";

interface IProps {
  id: string;
}
const props = defineProps<IProps>();
const messageId = toRef(props, `id`);

const statusHistoryOrderSwitchModel = useStatusHistoryOrderSwitchModel();
const statusHistoryStore = useStatusHistoryStore();
const { error, isLoading, statusHistory } = storeToRefs(statusHistoryStore);

watch([messageId], ([newId]) => {
  statusHistoryStore.getStatusHistory(newId);
});
</script>
