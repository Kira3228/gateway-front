<template>
  <div class="tw-flex tw-flex-col tw-h-full">
    <data-table-vue
      :is-loading="isLoading"
      :headers="headers"
      :items="messages.messages"
      @click-row="handleRowClick"
      :items-per-page="10"
      :page="1"
      :pagination-length="10"
      :total-visible="10"
    >
      <template v-slot:select-preset>
        <div class="tw-flex tw-flex-row-reverse tw-w-1/12">
          <!-- <preset-vue></preset-vue> -->
        </div>
      </template>
    </data-table-vue>
    <pagination
      :length="messages.totalPage"
      :total-visible="10"
      :value="currentPage"
      @update-page="handleUpdatePage"
    />
  </div>
</template>
<script lang="ts" setup>
import DataTableVue from "@/shared/UI/DataTable/DataTable.vue";
import { onMounted, ref, watch } from "vue";
import { TMessage } from "@/entities/message/model/types";
import { useMessageTableModel } from "../model/model";
import Pagination from "@/shared-ui/src/components/pagination/ui/pagination.vue";
import { useRoute, useRouter } from "vue-router/composables";

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
