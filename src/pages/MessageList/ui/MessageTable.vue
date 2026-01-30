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
        <div class="tw-flex tw-flex-row-reverse">
          <Options @click="handleSettingsClick" :items="settings" />
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
import { Option, Options } from "@/shared-ui/src/components/Options";

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

const handleSettingsClick = (data: Option) => {
  console.log(data);
};

const settings: Option[] = [
  {
    text: "Настройки",
    to: `/msg_list/settings`,
  },
];

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
