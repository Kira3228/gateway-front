<template>
  <div class="tw-h-full tw-flex tw-flex-col tw-overflow-hidden">
    <div class="tw-flex-1 tw-overflow-auto tw-min-h-0">
      <DataTable
        :items="messageStore.messages.messages"
        :headers="headers"
        :items-per-page="10"
        :page="1"
        :pagination-length="10"
        :total-visible="10"
        @click-row="messageViewStore.handleRowClick"
      >
        <template #select-preset>
          <div class="tw-flex tw-justify-between tw-items-baseline">
            <div>
              <PresetSelect class="tw-flex-1 pa-3" />
            </div>
            <Options
              @click="clickHandler"
              :items="[
                { text: `Настройки отображения`, to: { name: 'settings' } },
              ]"
            />
          </div>
        </template>
      </DataTable>
    </div>
    <Pagination
      class="w-shrink-0 tw-border-t tw-p-2"
      :length="messageStore.messages.totalPage"
      :total-visible="10"
      :value="messageViewStore.currentPage"
      @update-page=""
    />
    <MessageViewSettings />
  </div>
</template>
<script setup lang="ts">
import { DataTable } from "@/shared-ui/src/components/DataTable";
import { Pagination } from "@/shared-ui/src/components/pagination";
import { useMessageViewer } from "../model/use-message-viewer";
import { PresetSelect } from "@/features/preset-sync";
import { useMessageStore } from "@/entities/message/model/use-message-store";
import { useMessageViewStore } from "../model/use-message-view-store";
import { Options } from "@/shared-ui/src/components/Options";
import { MessageViewSettings } from "@/widgets/MessageViewSettings/ui";

const messageViewStore = useMessageViewStore();
const { headers, clickHandler } = useMessageViewer();
const messageStore = useMessageStore();
</script>
