<template>
  <ext-data-card title="История изменения">
    <div>
      <status-history-order-switch />
      <status-filters />
    </div>
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
import { toRef, watch } from "vue";
import { useStatusHistoryOrderSwitchModel } from "@/features/statusHistoryOrderSwitch/model/model";
import { useStatusHistoryStore } from "@/entities/statusHistory/model/store";
import { storeToRefs } from "pinia";
import StatusHistoryOrderSwitch from "@/features/statusHistoryOrderSwitch/ui/StatusHistoryOrderSwitch.vue";
import StatusHistorySortPanel from "./StatusHistorySortPanel/StatusHistorySortPanel.vue";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { useStatusFilterModel } from "@/features/statusFilters/model/model";
import StatusFilters from "@/features/statusFilters/ui/StatusFilters.vue";
import { useDebounce } from "@/shared/lib/debounce";
interface IProps {
  id: string;
}
const props = defineProps<IProps>();
const messageId = toRef(props, `id`);

const { changeDatetime, fullName, refresh } =
  useStatusHistoryOrderSwitchModel();
const statusHistoryStore = useStatusHistoryStore();
const { error, isLoading, statusHistory } = storeToRefs(statusHistoryStore);
const { newStatuses, oldStatuses } = useStatusFilterModel();
const { debounce } = useDebounce();

watch([newStatuses, oldStatuses], ([newNewStatuses, oldOldStatuses]) => {
  debounce(() => {});
});
watch(
  [messageId, changeDatetime, fullName, newStatuses, oldStatuses],
  (
    [newId, newChangeDatetime, newFullname, newNewStatuses, newOldStatuses],
    [oldId, oldDate, oldName, oldNewStatuses, oldOldStatuses]
  ) => {
    if (newId !== oldId) {
      refresh();
    }

    debounce(() => {
      statusHistoryStore.getStatusHistory(newId, {
        changeDatetime: newChangeDatetime,
        fullName: newFullname,
        limit: 10,
        newStatuses: newStatuses.value,
        oldStatuses: oldStatuses.value,
        page: 1,
        userTypes: "",
      });
    });
  },
  { immediate: true, deep: true }
);
</script>
