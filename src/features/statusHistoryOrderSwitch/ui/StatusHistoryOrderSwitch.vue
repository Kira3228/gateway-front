<template>
  <button-group
    @click-order="handleOrderClick"
    :height="40"
    :items="StatusHstorySortButtons"
  />
</template>
<script lang="ts" setup>
import ButtonGroup from "@/shared/UI/ButtonGroup/ButtonGroup.vue";
import { useStatusHistoryOrderSwitchModel } from "../model/model";
import { onUnmounted } from "vue";

const { StatusHstorySortButtons, refresh, setOrder } =
  useStatusHistoryOrderSwitchModel();

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
