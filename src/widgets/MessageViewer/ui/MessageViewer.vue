<template>
  <div class="tw-flex tw-flex-col tw-h-full">
    <DataTable
      :is-loading="isLoading"
      :items="messages.messages"
      @click-row="handleRowClick"
      :items-per-page="10"
      :page="1"
      :pagination-length="10"
      :total-visible="10"
    >
      <template #select-preset> <PresetSelect /> </template>
    </DataTable>
    <Pagination
      :length="messages.totalPage"
      :total-visible="10"
      :value="currentPage"
      @update-page="handleUpdatePage"
    />
  </div>
</template>
<script setup lang="ts">
import { DataTable } from "@/shared-ui/src/components/DataTable";
import { Pagination } from "@/shared-ui/src/components/pagination";
</script>
