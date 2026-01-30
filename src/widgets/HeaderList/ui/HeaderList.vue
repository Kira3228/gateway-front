<template>
  <div class="tw-h-full tw-flex tw-flex-col">
    <div
      class="tw-flex-1 tw-overflow-y-auto tw-min-h-0 tw-w-1/3 tw-justify-between"
    >
      <div
        class="tw-flex tw-items-center tw-w-full tw-justify-between tw-py-1 tw-px-2"
        :class="{ gray: index % 2 === 0, white: index % 2 !== 0 }"
        color="#ededed"
        v-for="(item, index) in headers"
        :key="item.value"
      >
        <div class="tw-flex">
          <div>
            <v-switch hide-details />
          </div>
          <div>
            <v-list-item-title class="tw-text-sm">{{
              item.text
            }}</v-list-item-title>
          </div>
        </div>
        <div class="tw-flex">
          <Button height="18" outlined> <ArrowUpIcon /></Button>
          <Button height="18" outlined><ArrowDownIcon /></Button>
        </div>
      </div>
      <v-divider></v-divider>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Header } from "@/shared-ui/src/components/DataTable";
import { ref } from "vue";
import { items } from "../items";
import ButtonGroup from "@/shared/UI/ButtonGroup/ButtonGroup.vue";
import { Button } from "@/shared-ui/src/components/Button";
import { ArrowDownIcon, ArrowUpIcon } from "@/shared-ui/src/components/Icons";

interface HeaderListProps {
  // items: Header[];
}
const props = defineProps<HeaderListProps>();

const headers = ref(items);
</script>
<style scoped>
.gray {
  background-color: #ededed;
}
.white {
  background-color: #ffffff;
}
.v-input--selection-controls {
  margin: 0;
  padding: 0;
}
</style>
