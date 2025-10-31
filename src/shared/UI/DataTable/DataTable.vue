<template>
  <div class="tw-w-full">
    <v-data-table
      :multi-sort="true"
      item-class="tw-w-full"
      :headers="headers"
      :items="items"
      calculate-widths
      :page.sync="page"
      :items-per-page="itemsPerPage"
      item-key="id"
      class="elevation-1 tw-text-xs"
      color="primary"
      :single-select="false"
      hide-default-footer
      dense
      :sort-by.sync="localSortByList"
      :sort-desc.sync="sortDescFields"
      @click:row="handleRowClick"
      :loading="isLoading"
      loading-text="Загрузка данных"
    >
      <template v-slot:top>
        <slot name="select-preset"></slot>
      </template>
    </v-data-table>
    <slot name="modal"></slot>

    <v-pagination v-model="localPage" :total-visible="7" :length="paginationLength">
    </v-pagination>
  </div>
</template>

<script lang="ts">
import { TMessage } from "@/shared/types/messages/TMessage";
import Vue, { PropType } from "vue";
import { DataTableHeader } from "vuetify";
import SelectInput from "../SelectInput/SelectInput.vue";

export default Vue.extend({
  components: { SelectInput },
  name: "DataTable",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    headers: {
      type: Array as PropType<DataTableHeader[]>,
      default: (): DataTableHeader[] => [],
    },
    items: {
      type: Array as PropType<TMessage[]>,
      default: (): TMessage[] => [],
    },
    paginationLength: {
      type: Number,
      default: 0,
    },
    page: { type: Number, default: 1 },

    sortByList: {
      type: Array,
      default: (): string[] => [],
    },
    sortDescList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      localPage: this.page,
      itemsPerPage: 14,
    };
  },

  computed: {
    sortDescFields: {
      get() {
        return this.sortDescList;
      },
      set(value) {
        this.$emit("update:sortDescList", value);
      },
    },
    isArchived: {
      get(): boolean {
        return this.$store.state.activeFileTable.isArchived;
      },
      set(newValue: boolean) {
        this.$store.commit(`activeFileTable/SET_SWITCH`, newValue);
      },
    },
    localSortByList: {
      get() {
        return this.sortByList;
      },
      set(value) {
        this.$emit("update:sortByList", value);
      },
    },
  },

  methods: {
    handleChangePage(newPage: number) {
      this.localPage = newPage;
      this.$emit("update:page", newPage);
      this.$emit("page-changed", newPage);
    },
    handleRowClick(data: any) {
      this.$emit(`click-row`, data);
    },

    getColor(status: string): string {
      if (status === `active`) return `green`;
      else if (status === `archived`) return `orange`;
      else return `red`;
    },
    async onUpdate(itemId: string, newStatus: string) {
      await this.$store.dispatch(`activeFileTable/updateStatus`, {
        id: Number(itemId),
        status: newStatus,
      });
    },
    formatDate(date: string): string {
      return date ? date.split("T")[0] : "";
    },
  },

  watch: {},
});
</script>
