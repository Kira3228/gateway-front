<template>
  <v-hover v-slot="{ hover }">
    <div
      class="tw-flex tw-flex-col tw-p-2 tw-rounded tw-cursor-pointer tw-transition-colors"
      :class="{ 'scroll-item': hover }"
    >
      <div class="tw-flex tw-justify-between tw-items-center">
        <span class="tw-text-blue-700 tw-font-bold">{{ item.fileName }}</span>
        <span class="tw-text-xs tw-text-gray-500"
          >{{ item.fileSizeBytes }} B</span
        >
      </div>
      <div class="tw-text-sm tw-text-gray-600">{{ item.filePath }}</div>
      <div class="tw-text-xs tw-mt-1">{{ item.description }}</div>
    </div>
  </v-hover>
</template>
<script lang="ts" setup>
import { TMessageFile } from "@/entities/messageFile/model/types";

interface MessageFileCardProps {
  item: TMessageFile;
}

const props = defineProps<MessageFileCardProps>();
</script>
