<template>
  <ext-data-card title="Файлы">
    <div class="tw-h-full tw-flex tw-flex-col tw-overflow-hidden">
      <div class="tw-flex-shrink-0 tw-mb-4">
        <file-order-switch />
      </div>
      <complex-virtual-scroll
        class="tw-flex-1 tw-min-h-0"
        :error="fileStore.error"
        :is-loading="fileStore.isLoading"
        :items="fileStore.files"
        :skeleton-height="100"
        :skeletons-quantity="10"
        @load-more="messageFileList.onScrollLoadMore"
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
import { FileOrderSwitch } from "@/features/fileOrderSwitch/";
import { useMessageFileStore } from "@/entities/messageFile/model/store";
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import { MessageFileCard } from "@/shared/UI/MessageFileCard";
import { useMessageFileList } from "../model/useMessageFileList";

const fileStore = useMessageFileStore();
const messageFileList = useMessageFileList();
</script>
<style scoped lang="scss">
.scroll-item {
  background-color: #ededed;
}
</style>
