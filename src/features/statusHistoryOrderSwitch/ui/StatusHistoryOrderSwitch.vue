<template>
  <button-group
    @click-order="handleOrderClick"
    :height="42"
    :items="StatusHstorySortButtons"
  />
</template>
<script lang="ts" setup>
import ButtonGroup from "@/shared/UI/ButtonGroup/ButtonGroup.vue";
import { useStatusHistoryOrderSwitchModel } from "../model/model";

const { StatusHstorySortButtons } = useStatusHistoryOrderSwitchModel();

const handleOrderClick = (data: {
  sortField: string;
  sortOrder: "" | "ASC" | "DESC";
}) => {};
</script>
