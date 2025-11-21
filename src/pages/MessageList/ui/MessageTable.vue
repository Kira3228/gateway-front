<template>
  <data-table-vue
    :isLoading="isLoading"
    :headers="headers"
    :items="messages"
    @click-row="handleRowClick"
  >
    <template v-slot:modal></template>
    <template v-slot:select-preset>
      <div class="tw-w-screen tw-flex tw-justify-items-end">
        <preset-vue></preset-vue>
      </div>
    </template>
  </data-table-vue>
</template>
<script lang="ts" setup>
import DataTableVue from "@/shared/UI/DataTable/DataTable.vue";
import PresetVue from "@/features/preset/ui/Preset.vue";
import { onMounted } from "vue";
import { TMessage } from "@/entities/message/model/types";
import { useMessageTableModel } from "../model/model";

const { init, headers, isLoading, messages } = useMessageTableModel();

const emit = defineEmits<{
  (e: `open-modal`, messageId: string): void;
}>();

const handleRowClick = (data: TMessage) => {
  emit(`open-modal`, data.messageId);
};

onMounted(() => {
  init();
});
</script>
