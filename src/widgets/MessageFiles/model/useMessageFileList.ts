import { useMessageFileStore } from "@/entities/messageFile/model/store";
import { useFileOrderSwitchModel } from "@/features/fileOrderSwitch";
import { computed, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router/composables";

export const useMessageFileList = () => {
  const route = useRoute()
  const id = route.params.id
  const { fileNameOrder, fileSizeBytesOrder } = useFileOrderSwitchModel();
  const fileStore = useMessageFileStore();

  const reloadParams = computed(() => ({
    id: id,
    fileNameOrder: fileNameOrder.value,
    fileSizeBytesOrder: fileSizeBytesOrder.value,
  }));

  watch(
    reloadParams,
    (newParams) => {
      if (!newParams.id) return;
      fileStore.getMessageFiles(
        newParams.id,
        {
          fileNameOrder: newParams.fileNameOrder,
          page: 1,
          fileSizeBytesOrder: newParams.fileSizeBytesOrder,
          limit: 14,
        },
        true,
      );
    },
    {
      immediate: true,
      deep: true,
    },
  );

  onUnmounted(() => {
    fileStore.resetState();
  });

  const onScrollLoadMore = () => {
    fileStore.loadMore(id, {
      fileNameOrder: fileNameOrder.value,
      fileSizeBytesOrder: fileSizeBytesOrder.value,
      limit: 5,
    });
  };
  return {
    id, onScrollLoadMore
  }
}