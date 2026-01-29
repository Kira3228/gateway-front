<template>
  <v-hover v-slot="{ hover }">
    <div
      class="tw-p-2 tw-rounded tw-cursor-pointer tw-transition-colors"
      :class="{ 'scroll-item': hover }"
    >
      <div class="tw-flex tw-justify-between">
        <div class="tw-flex tw-gap-2 tw-items-center">
          <span class="tw-text-blue-700 tw-font-bold">{{
            item.user.fullName
          }}</span>
          <span class="tw-text-xs tw-text-gray-600">{{
            item.changeDatetime
          }}</span>
          <span
            class="tw-font-bold tw-text-lg"
            :class="{
              'tw-text-green-700': item.user.isActive,
              'tw-text-red-700': !item.user.isActive,
            }"
          >
            •
          </span>
        </div>
        <span class="tw-text-xs tw-text-gray-500"
          >{{ item.user.userType }}
        </span>
      </div>
      <div class="tw-flex">
        <span class="tw-text-sm tw-text-red-700 tw-font-bold">{{
          item.oldStatus
        }}</span>
        <v-icon size="12">mdi-forward</v-icon>
        <span class="tw-text-sm tw-text-green-800 tw-font-bold" color="red">{{
          item.newStatus
        }}</span>
      </div>
      <div class="tw-flex tw-flex-col">
        <span>Причина: {{ item.reason }}</span>
        <span>{{ item.metadata }}</span>
      </div>
    </div>
  </v-hover>
</template>
<script lang="ts" setup>
import { TStatusHistoryItem } from "@/entities/statusHistory/model/types";

defineProps<{
  item: TStatusHistoryItem;
}>();
</script>
<style scoped lang="scss">
.scroll-item {
  background-color: #ededed;
}
</style>
