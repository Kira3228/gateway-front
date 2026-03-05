<template>
  <div class="tw-h-full tw-flex tw-flex-col tw-overflow-hidden">
    <div class="tw-flex-1 tw-min-h-0 tw-w-full">
      <DataTable
        style="min-width: 100%; width: 0px"
        :items="messages"
        :headers="headers"
        :items-per-page="50"
        :page="1"
        :pagination-length="10"
        :total-visible="10"
        height="500"
        :is-loading="messageStore.isLoading"
        @change="handle"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
      >
        <template #select-preset>
          <TopBar
            :on-options="optionClickHandler"
            :on-filter="handleFilterButtonClick"
          />
        </template>
      </DataTable>
    </div>
    <Pagination
      class="w-shrink-0 tw-border-t tw-p-2"
      :length="messageStore.messages.totalPage"
      :total-visible="10"
      :value="currentPage"
      @update-page=""
    />
    <MessageViewSettings v-model="settingsIsOpen" />
    <MessageExportWindow v-model="exportWindowIsOpen" />
    <FilterDrawer v-model="drawerIsOpen" />
  </div>
</template>
<script setup lang="ts">
import { useMessageViewer } from "../model/use-message-viewer";
import { useMessageStore } from "@/entities/message/model/use-message-store";
import { DataTable } from "@/shared-ui/src/components/DataTable";
import { Pagination } from "@/shared-ui/src/components/pagination";
import { MessageViewSettings } from "@/widgets/MessageViewSettings/ui";
import { FilterDrawer } from "@/widgets/FilterDrawer/ui";
import { MessageExportWindow } from "@/widgets/MessageExportWindow/ui";
import { ref } from "vue";
import TopBar from "./TopBar.vue";

const {
  headers,
  settingsIsOpen,
  optionClickHandler,
  handleRowClick,
  handleFilterButtonClick,
  currentPage,
  drawerIsOpen,
  messages,
  exportWindowIsOpen,
  sortBy,
  sortDesc,
} = useMessageViewer();

const messageStore = useMessageStore();

const handle = (data: any) => {
  console.log(data);
};
</script>
