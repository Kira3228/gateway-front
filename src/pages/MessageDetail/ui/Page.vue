<template>
  <div
    class="tw-h-full  tw-grid tw-grid-cols-3 tw-w-full tw-overflow-hidden"
  >
    <div class="tw-min-h-0">
      <MessageDataCard />
    </div>

    <div class="tw-min-h-0">
      <MessageFileList />
    </div>

    <div class="tw-min-h-0">
      <StatusHistory />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MessageDataCard } from "@/widgets/MessageData";
import { MessageFileList } from "@/widgets/MessageFileList/ui";
import { StatusHistory } from "@/widgets/StatusHistory";
</script>
