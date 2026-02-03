<template>
  <div class="tw-h-full tw-flex tw-flex-col">
    <message-list-filters />
    <MessageViewer />
  </div>
</template>
<script lang="ts" setup>
import { MessageViewer } from "@/widgets/MessageViewer/ui";
import MessageListFilters from "./MessageListFilters.vue";
</script>
