<template>
  <div class="tw-h-full tw-flex tw-flex-col tw-min-w-0 tw-overflow-hidden">
    <message-list-filters />
    <v-lazy min-height="500px" transition="fade-transition" :threshold="100">
      <div class="tw-flex-1 tw-min-h-0 tw-overflow-hidden">
        <MessageViewer class="tw-h-full" />
      </div>
    </v-lazy>
  </div>
</template>
<script lang="ts" setup>
import { MessageViewer } from "@/widgets/MessageViewer/ui";
import MessageListFilters from "./MessageListFilters.vue";
</script>
