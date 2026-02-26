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
        @click-row="handleRowClick"
        :is-loading="messageStore.isLoading"
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
} = useMessageViewer();

const messageStore = useMessageStore();
</script>
