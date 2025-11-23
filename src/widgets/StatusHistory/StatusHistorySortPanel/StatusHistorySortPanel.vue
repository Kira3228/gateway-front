<template>
  <div>
    <status-history-order-switch />
    <select-chips
      lable="Старый статус"
      @debounced-call=""
      v-model="oldStatuses"
      :items="SelectStatusHisotry"
      @input="test"
    />
    <select-chips
      lable="Новый статус"
      @debounced-call=""
      v-model="newStatuses"
      :items="SelectStatusHisotry"
    />
  </div>
</template>
<script lang="ts" setup>
import StatusHistoryOrderSwitch from "@/features/statusHistoryOrderSwitch/ui/StatusHistoryOrderSwitch.vue";
import SelectChips from "@/shared/UI/SelectChips/SelectChips.vue";
import { SelectStatusHisotry } from "./SelectStatusHistory";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useStatusFiltersStore } from "@/features/statusFilters/model/store";

const { newStatuses, oldStatuses } = storeToRefs(useStatusFiltersStore());
const test = (data: any) => {
  console.log(`Высер`, data);
};
watch([newStatuses, oldStatuses], ([newValue1, newValue2]) => {});
</script>
