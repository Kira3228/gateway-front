<template>
  <div class="tw-h-full tw-flex tw-flex-col tw-overflow-hidden">
    <div class="tw-flex-1 tw-min-h-0 tw-w-full">
      <DataTable
        style="min-width: 100%; width: 0px"
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
            <div class="tw-flex">
              <Button
                @click="handleFilterButtonClick"
                color="black"
                :height="28"
                outlined
              >
                <div class="tw-flex tw-items-center tw-gap-2">
                  <FilterIcon width="18" />
                  Все фильтры
                </div>
              </Button>
              <Options
                @click="clickHandler"
                :items="[
                  { text: `Настройки отображения`, to: { name: 'settings' } },
                ]"
              />
            </div>
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
    <MessageViewSettings v-model="settingsIsOpen" />
    <FilterDrawer v-model="drawerIsOpen" />
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
import { Button } from "@/shared-ui/src/components/Button";
import { FilterIcon } from "@/shared-ui/src/components/Icons";
import { ref } from "vue";
import { FilterDrawer } from "@/widgets/FilterDrawer/ui";

const messageViewStore = useMessageViewStore();

const { headers, clickHandler, settingsIsOpen } = useMessageViewer();

const messageStore = useMessageStore();

const drawerIsOpen = ref<boolean>(false);

const handleFilterButtonClick = () => {
  drawerIsOpen.value = true;
};
</script>
