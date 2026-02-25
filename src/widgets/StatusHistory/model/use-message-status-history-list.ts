import { useStatusHistoryStore } from "@/entities/statusHistory";
import { useStatusFilterModel } from "@/features/statusFilters";
import { useStatusHistoryOrderSwitchModel } from "@/features/statusHistoryOrderSwitch";
import { useDebounce } from "@/shared-ui/src/lib";
import { objectArrValueToArr } from "@/shared/lib/object-value-to-array";
import { computed, watch } from "vue";
import { useRoute } from "vue-router/composables"

export const useMessageStatusHistoryList = () => {
  const route = useRoute()
  const id = route.params.id
  const statusHistoryOrderSwitch = useStatusHistoryOrderSwitchModel();
  const statusFilter = useStatusFilterModel()
  const statusHistoryStore = useStatusHistoryStore();
  const { debounce, cancelDebounce } = useDebounce();

  const reloadParams = computed(() => ({
    id: id,
    changeDatetime: statusHistoryOrderSwitch.changeDatetime.value,
    fullName: statusHistoryOrderSwitch.fullName.value,
    newStatuses: statusFilter.newStatuses.value,
    oldStatuses: statusFilter.oldStatuses.value,
    userTypes: statusFilter.userTypes.value,
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
        newStatuses: objectArrValueToArr(statusFilter.newStatuses.value),
        oldStatuses: objectArrValueToArr(statusFilter.oldStatuses.value),
        userTypes: objectArrValueToArr(statusFilter.userTypes.value),
      },
      true,
    );
  };

  const onScrollLoadMore = () => {
    statusHistoryStore.loadMore(id, {
      changeDatetime: statusHistoryOrderSwitch.changeDatetime.value,
      fullName: statusHistoryOrderSwitch.fullName.value,
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
    },
  );

  watch(
    [() => reloadParams.value.newStatuses, () => reloadParams.value.oldStatuses, () => reloadParams.value.userTypes],
    () => {
      debounce(fetchHistory);
    },
    { immediate: true },
  );

  return {
    fetchHistory,
    onScrollLoadMore
  }
}