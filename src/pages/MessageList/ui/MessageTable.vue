<template>
  <div class="tw-flex tw-flex-col tw-h-full">
    <data-table-vue
      :is-loading="isLoading"
      :headers="headers"
      :items="messages"
      @click-row="handleRowClick"
      :items-per-page="10"
      :page="1"
      :pagination-length="10"
      :total-visible="10"
    >
      <template v-slot:select-preset>
        <div class="tw-flex tw-flex-row-reverse tw-w-1/12">
          <!-- <preset-vue></preset-vue> -->
          asdsad
        </div>
      </template>
    </data-table-vue>
    <pagination
      :length="20"
      :total-visible="10"
      :value="currentPage"
    ></pagination>
  </div>
</template>
<script lang="ts" setup>
import DataTableVue from "@/shared/UI/DataTable/DataTable.vue";
import PresetVue from "@/features/preset/ui/Preset.vue";
import { onMounted, ref, watch } from "vue";
import { TMessage } from "@/entities/message/model/types";
import { useMessageTableModel } from "../model/model";
import Pagination from "@/shared-ui/src/components/pagination/ui/pagination.vue";
import { useRoute } from "vue-router/composables";

const { init, headers, isLoading, messages } = useMessageTableModel();
const route = useRoute();

const currentPage = ref<number>(1);
console.log(currentPage.value);

const emit = defineEmits<{
  (e: `open-modal`, messageId: string): void;
}>();

const handleRowClick = (data: TMessage) => {
  emit(`open-modal`, data.messageId);
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
  }
);
</script>
