<template>
  <ButtonGroup
    @click-order="handleOrderClick"
    :height="42"
    :items="MessageFileSortButtons"
  ></ButtonGroup>
</template>
<script lang="ts" setup>
import ButtonGroup from "@/shared/UI/ButtonGroup/ButtonGroup.vue";
import { useFileOrderSwitchModel } from "../model/model";
const { MessageFileSortButtons } = useFileOrderSwitchModel();
const { setOrder } = useFileOrderSwitchModel();
const handleOrderClick = (data: {
  sortField: string;
  sortOrder: "" | "ASC" | "DESC";
}) => {
  setOrder(data.sortField, data.sortOrder);
};
</script>
