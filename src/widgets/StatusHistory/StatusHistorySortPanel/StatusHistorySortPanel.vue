<template>
  <div>
    <status-history-order-switch />
    <select-chips v-model="selectedOldStatuses" :items="SelectStatusHisotry" />
    <select-chips v-model="selectedNewStatuses" :items="SelectStatusHisotry" />
  </div>
</template>

<script lang="ts" setup>
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import StatusHistoryOrderSwitch from "@/features/statusHistoryOrderSwitch/ui/StatusHistoryOrderSwitch.vue";
import SelectChips from "@/shared/UI/SelectChips/SelectChips.vue";
import { SelectStatusHisotry } from "./SelectStatusHistory";
import { ref } from "vue";
import { TOption } from "@/shared/UI/SelectInput/TOptions";

const handleSelectStatus = async (): Promise<void> => {};
const handleRemoveOldChip = (index: number) => {};
const handleRemoveNewChip = (index: number) => {};
const selectedOldStatuses = ref<TOption[]>([]);
const selectedNewStatuses = ref<TOption[]>([]);

const items = ["foo", "bar", "fizz", "buzz"];
const value = ["foo", "bar", "fizz", "buzz"];
const handleClick = (data: TButtonGroupItem & { isActive: boolean }) => {
  if (data.isActive) {
  } else {
  }
};
</script>
