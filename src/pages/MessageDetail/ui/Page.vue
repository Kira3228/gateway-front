<template>
  <div class="tw-h-full tw-bg-red-100 tw-flex">
    <div class="tw-flex-shrink-1">
      <MessageDataCard :id="id" />
    </div>
    <div class="tw-flex-1 tw-w-full">
      <MessageFiles :id="id" />
    </div>
    <div class="tw-flex-1 tw-w-full">
      <StatusHistory :id="id" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MessageDataCard } from "@/widgets/MessageData";
import { MessageFiles } from "@/widgets/MessageFiles";
import { StatusHistory } from "@/widgets/StatusHistory";

import { useRoute } from "vue-router/composables";

const route = useRoute();

const id = route.params.id;
</script>
