<template>
  <div class="tw-flex tw-flex-col tw-h-full">
    <DataTable
      :items-per-page="10"
      :page="1"
      :pagination-length="10"
      :total-visible="10"
    >
      <template #select-preset> <PresetSelect /> </template>
    </DataTable>
    <!-- <Pagination
      :length="messages.totalPage"
      :total-visible="10"
      :value="currentPage"
      @update-page="handleUpdatePage"
    /> -->
  </div>
</template>
<script setup lang="ts">
import { DataTable } from "@/shared-ui/src/components/DataTable";
import { Pagination } from "@/shared-ui/src/components/pagination";
import { useMessageViewer } from "../model/use-message-viewer";
import { usePresetStore } from "@/entities/preset/model/store";
import { PresetSelect } from "@/features/preset-sync";

const messageViewer = useMessageViewer();
</script>
