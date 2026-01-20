<template>
  <ext-data-card title="История изменения">
    <div>
      <status-history-order-switch />
      <status-filters />
    </div>
    <complex-virtual-scroll
      :error="error"
      :is-loading="isLoading"
      :items="statusHistory.history"
      :skeleton-height="100"
      :skeletons-quantity="6"
      @load-more=""
      ><template #content="{ item }">
        <status-history-card :item="item"></status-history-card>
      </template>
    </complex-virtual-scroll>
  </ext-data-card>
</template>

<script lang="ts" setup>
import StatusHistoryCard from "@/shared/UI/StatusHistoryCard/StatusHistoryCard.vue";
import ExtDataCard from "@/shared/UI/ExtDataCard/ExtDataCard.vue";
import { computed, toRef, watch } from "vue";
import {
  useStatusHistoryOrderSwitchModel,
  StatusHistoryOrderSwitch,
} from "@/features/statusHistoryOrderSwitch";
import { useStatusHistoryStore } from "@/entities/statusHistory/model/store";
import { storeToRefs } from "pinia";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { useStatusFilterModel, StatusFilters } from "@/features/statusFilters";
import { useDebounce } from "@/shared/lib/debounce";
import { onjectArrValueToArr } from "@/shared/lib/object-value-to-array";

interface IProps {
  id: string;
}

const props = defineProps<IProps>();
const messageId = toRef(props, `id`);

const { changeDatetime, fullName, refresh } =
  useStatusHistoryOrderSwitchModel();

const statusHistoryStore = useStatusHistoryStore();

const { error, isLoading, statusHistory, page, isAvalibleLoading } =
  storeToRefs(statusHistoryStore);
const { newStatuses, oldStatuses, store, userTypes } = useStatusFilterModel();
const { debounce, cancelDebounce } = useDebounce();

const reloadParams = computed(() => ({
  id: messageId.value,
  changeDatetime: changeDatetime.value,
  fullName: fullName.value,
  newStatuses: newStatuses.value,
  oldStatuses: oldStatuses.value,
  userTypes: userTypes.value,
}));

const fetchHistory = () => {
  const params = reloadParams.value;
  if (!params.id) return;
  statusHistoryStore.getStatusHistory(
    params.id,
    {
      changeDatetime: params.changeDatetime,
      fullName: params.fullName,
      limit: 10,
      newStatuses: onjectArrValueToArr(newStatuses.value),
      oldStatuses: onjectArrValueToArr(oldStatuses.value),
      userTypes: onjectArrValueToArr(userTypes.value)
    },
    true
  );
};
const onScrollLoadMore = () => {
  statusHistoryStore.loadMore(messageId.value, {
    changeDatetime: changeDatetime.value,
    fullName: fullName.value,
    newStatuses: newStatuses.value,
  });
};
watch(
  [
    () => reloadParams.value.id,
    () => reloadParams.value.changeDatetime,
    () => reloadParams.value.fullName,
  ],
  () => {
    cancelDebounce();
    fetchHistory();
  }
);
watch(
  [() => reloadParams.value.newStatuses, () => reloadParams.value.oldStatuses],
  () => {
    debounce(fetchHistory);
  },
  { immediate: true }
);
</script>
