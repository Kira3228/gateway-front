<template>
  <ext-data-card title="История изменения">
    <status-history-sort-panel />
    <complex-virtual-scroll
      :error="error"
      :is-loading="isLoading"
      :items="statusHistory"
      :skeleton-height="100"
      :skeletons-quantity="6"
      ><template #content="{ item }">
        <status-history-card :item="item"></status-history-card>
      </template>
    </complex-virtual-scroll>
  </ext-data-card>
</template>

<script lang="ts" setup>
import StatusHistoryCard from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import ExtDataCard from "@/shared/UI/ExtDataCard/ExtDataCard.vue";
import StatusHistoryVirtualScroll from "./StatusHistoryVirtualScroll/StatusHistoryVirtualScroll.vue";
import { toRef, watch } from "vue";
import { useStatusHistoryOrderSwitchModel } from "@/features/statusHistoryOrderSwitch/model/model";
import { useStatusHistoryStore } from "@/entities/statusHistory/model/store";
import { storeToRefs } from "pinia";
import StatusHistorySortPanel from "./StatusHistorySortPanel/StatusHistorySortPanel.vue";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";

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
