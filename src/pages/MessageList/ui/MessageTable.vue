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
<script lang="ts">
import DataTableVue from "@/shared/UI/DataTable/DataTable.vue";
import PresetVue from "@/features/preset/ui/Preset.vue";
import Vue from "vue";
import { useMessageTableModel } from "../model/model";
import {
  IMessageTableComputed,
  IMessageTableData,
  IMessageTableMethods,
  IMessageTableProps,
} from "../model/types";
import { THeaderColumn } from "@/entities/header/model/types";
import { TMessage } from "@/entities/message/model/types";
import { VBtn } from "vuetify/lib";
const model = useMessageTableModel();
export default Vue.extend<
  IMessageTableData,
  IMessageTableMethods,
  IMessageTableComputed,
  IMessageTableProps
>({
  components: { DataTableVue, PresetVue },

  computed: {
    headers(): THeaderColumn[] {
      return model.headers;
    },
    messages(): TMessage[] {
      return model.messages;
    },
    isLoading(): boolean {
      return model.isLoading;
    },
  },
  methods: {
    handleRowClick(data: TMessage) {
      this.$emit(`open-modal`, data.messageId);
    },
  },
  mounted() {
    model.init();
  },
});
</script>
