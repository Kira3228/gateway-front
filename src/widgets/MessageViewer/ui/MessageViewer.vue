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
    <MessageViewSettings v-model="settingsIsOpen" />
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

const { headers, clickHandler, settingsIsOpen } = useMessageViewer();

const messageStore = useMessageStore();
</script>
<style scoped>
/* 
  Глубокий селектор для внутренней обертки Vuetify.
  Именно .v-data-table__wrapper отвечает за скролл.
*/
:deep(.v-data-table__wrapper) {
  overflow-x: auto !important; /* Разрешаем гориз. скролл */
  overflow-y: auto !important; /* Разрешаем верт. скролл */
  height: 100% !important; /* Растягиваем на всю высоту родителя */
}

/* 
  Фикс для sticky header при горизонтальном скролле 
  (чтобы хедер не уезжал вверх, но скроллился влево-вправо)
*/
:deep(.v-data-table > .v-data-table__wrapper > table) {
  width: 100%;
  border-spacing: 0;
}
</style>
