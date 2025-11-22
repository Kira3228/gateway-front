<template>
  <div>
    <text-input label="Поиск" isSearch></text-input>
    <button-group :height="height" :items="sortButtonsItems"></button-group>
  </div>
</template>
<script lang="ts" setup>
import TextInput from "@/shared/UI/TextInput/TextInput.vue";
import ButtonGroup from "@/shared/UI/ButtonGroup/ButtonGroup.vue";
const height = 30;
</script>
