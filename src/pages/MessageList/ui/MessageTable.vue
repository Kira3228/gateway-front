<template>
  <div class="tw-flex tw-flex-col tw-h-full">
    <DataTable
      :is-loading="isLoading"
      :items="messages.messages"
      @click-row="handleRowClick"
      :items-per-page="10"
      :page="1"
      :pagination-length="10"
      :total-visible="10"
    >
      <template #select-preset> <PresetSelect /> </template>
    </DataTable>
    <Pagination
      :length="messages.totalPage"
      :total-visible="10"
      :value="currentPage"
      @update-page="handleUpdatePage"
    />
  </div>
</template>
<script lang="ts" setup>
import { PresetSelect } from "@/features/preset-sync";
import { onMounted, ref, watch } from "vue";
import { TMessage } from "@/entities/message/model/types";
import { useMessageTableModel } from "../model/model";
import { useRoute, useRouter } from "vue-router/composables";
import { DataTable } from "@/shared-ui/src/components/DataTable";
import { Pagination } from "@/shared-ui/src/components/pagination";

const { init, headers, isLoading, messages } = useMessageTableModel();
const route = useRoute();
const router = useRouter();

const handleUpdatePage = (newPage: number) => {
  router.push({
    query: {
      ...route.query,
      page: String(newPage),
    },
  });
};

const currentPage = ref<number>(1);

const emit = defineEmits<{
  (e: `open-modal`, messageId: string): void;
}>();

const handleRowClick = (data: TMessage) => {
  router.push({
    name: `details`,
    params: {
      id: data.messageId,
    },
  });
};

onMounted(() => {
  const pageFromUrl = Number(route.query.page) || 1;
  currentPage.value = pageFromUrl;

  init(pageFromUrl);
});

watch(
  () => route.query.page,
  (newPage) => {
    const page = Number(newPage) || 1;
    currentPage.value = page;
    init(page);
  },
  { immediate: true },
);
</script>
