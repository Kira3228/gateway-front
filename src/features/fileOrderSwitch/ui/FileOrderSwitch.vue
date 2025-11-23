<template>
  <SwitchButtons
    @click-order="handleOrderClick"
    :height="42"
    :items="MessageFileSortButtons"
  />
</template>
<script lang="ts" setup>
import { useFileOrderSwitchModel } from "../model/model";
import { onUnmounted } from "vue";
import SwitchButtons from "@/shared/UI/SwitchButtons/SwitchButtons.vue";
const { MessageFileSortButtons } = useFileOrderSwitchModel();

const { setOrder, refresh } = useFileOrderSwitchModel();

const handleOrderClick = (data: {
  sortField: string;
  sortOrder: "" | "ASC" | "DESC";
}) => {
  setOrder(data.sortField, data.sortOrder);
};

onUnmounted(() => {
  refresh();
});
</script>
