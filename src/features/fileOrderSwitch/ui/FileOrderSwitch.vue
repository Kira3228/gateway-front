<template>
  <ButtonGroup
    @click-order="handleOrderClick"
    :height="32"
    :items="MessageFileSortButtons"
    
  />
</template>
<script lang="ts" setup>
import ButtonGroup from "@/shared/UI/ButtonGroup/ButtonGroup.vue";
import { useFileOrderSwitchModel } from "../model/model";
import { onUnmounted } from "vue";
const { MessageFileSortButtons } = useFileOrderSwitchModel();
const { setOrder, refresh } = useFileOrderSwitchModel();
const handleOrderClick = (data: {
  sortField: string;
  sortOrder: "" | "ASC" | "DESC";
  key: number;
}) => {
  setOrder(data.sortField, data.sortOrder);
};

onUnmounted(() => {
  refresh();
});
</script>
