<template>
  <div>
  </div>
</template>

<script lang="ts" setup>
import StatusHistoryOrderSwitch from "@/features/statusHistoryOrderSwitch/ui/StatusHistoryOrderSwitch.vue";
import SelectChips from "@/shared/UI/SelectChips/SelectChips.vue";
import { ref } from "vue";
import { TOption } from "@/shared/UI/SelectInput/TOptions";

const selectedOldStatuses = ref<TOption[]>([]);
const selectedNewStatuses = ref<TOption[]>([]);
</script>
