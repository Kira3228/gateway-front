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
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
const { MessageFileSortButtons } = useFileOrderSwitchModel();
const handleOrderClick = (data: TButtonGroupItem) => {};
</script>
