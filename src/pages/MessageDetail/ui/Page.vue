<template>
  <div class="tw-h-full tw-bg-red-100 tw-flex">
    <div class="tw-flex-shrink-1">
      <MessageDataCard />
    </div>
    <div class="tw-flex-1 tw-w-full">
      <MessageFileList />
    </div>
    <div class="tw-flex-1 tw-w-full">
      <StatusHistory :id="id" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MessageDataCard } from "@/widgets/MessageData";
import { MessageFileList } from "@/widgets/MessageFileList/ui";
import { StatusHistory } from "@/widgets/StatusHistory";

import { useRoute } from "vue-router/composables";

const route = useRoute();

const id = route.params.id;
</script>
