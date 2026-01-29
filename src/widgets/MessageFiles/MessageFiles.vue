<template>
  <ext-data-card title="Файлы">
    <div class="tw-h-full tw-flex tw-flex-col tw-overflow-hidden">
      <div class="tw-flex-shrink-0 tw-mb-4">
        <file-order-switch />
      </div>
      <complex-virtual-scroll
        class="tw-flex-1 tw-min-h-0"
        :error="error"
        :is-loading="isLoading"
        :items="files.files"
        :skeleton-height="100"
        :skeletons-quantity="10"
        @load-more="onScrollLoadMore"
      >
        <template #content="{ item }">
          <MessageFileCard :item="item" />
        </template>
      </complex-virtual-scroll>
    </div>
  </ext-data-card>
</template>

<script lang="ts" setup>
import ExtDataCard from "@/shared/UI/ExtDataCard/ExtDataCard.vue";
import {
  FileOrderSwitch,
  useFileOrderSwitchModel,
} from "@/features/fileOrderSwitch/";
import { computed, onUnmounted, toRef, watch } from "vue";
import { useMessageFileStore } from "@/entities/messageFile/model/store";
import { storeToRefs } from "pinia";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { MessageFileCard } from "@/shared/UI/MessageFileCard";

interface IProps {
  id: string;
}

const props = defineProps<IProps>();
const messageId = toRef(props, "id");

const { fileNameOrder, fileSizeBytesOrder } = useFileOrderSwitchModel();
const fileStore = useMessageFileStore();

const { files, error, isLoading, page } = storeToRefs(fileStore);

const reloadParams = computed(() => ({
  id: messageId.value,
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

const onScrollLoadMore = () => {
  fileStore.loadMore(messageId.value, {
    fileNameOrder: fileNameOrder.value,
    fileSizeBytesOrder: fileSizeBytesOrder.value,
    limit: 5,
  });
};

onUnmounted(() => {
  fileStore.resetState();
});
</script>
<style scoped lang="scss">
.scroll-item {
  background-color: #ededed;
}
</style>
