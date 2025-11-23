<template>
  <SwitchButtons
    @click-order="handleOrderClick"
    :height="42"
    :items="StatusHstorySortButtons"
  />
</template>
<script lang="ts" setup>
import { useStatusHistoryOrderSwitchModel } from "../model/model";
import SwitchButtons from "@/shared/UI/SwitchButtons/SwitchButtons.vue";

const { StatusHstorySortButtons, setOrder } =
  useStatusHistoryOrderSwitchModel();

const handleOrderClick = (data: {
  sortField: string;
  sortOrder: "" | "ASC" | "DESC";
}) => {
  setOrder(data.sortField, data.sortOrder);
};
</script>
