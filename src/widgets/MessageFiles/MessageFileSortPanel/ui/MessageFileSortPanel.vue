<template>
  <div>
    <text-input label="Поиск" isSearch></text-input>
    <file-order-switch></file-order-switch>
  </div>
</template>
<script lang="ts" setup>
import TextInput from "@/shared/UI/TextInput/TextInput.vue";
import FileOrderSwitch from "@/features/fileOrderSwitch/ui/FileOrderSwitch.vue";
import ButtonGroup from "@/shared/UI/ButtonGroup/ButtonGroup.vue";
const height = 30;
</script>
