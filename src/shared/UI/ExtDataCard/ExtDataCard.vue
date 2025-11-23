<template>
  <v-sheet
    color="red"
    class="tw-p-3 tw-h-full tw-flex tw-flex-col"
    width="100%"
  >
    <v-card-title>{{ title }}</v-card-title>
    <div class="tw-flex tw-bg-yellow-700 tw-flex-1 tw-min-h-0">
      <slot></slot>
    </div>
  </v-sheet>
</template>

<script lang="ts" setup>
interface IProps {
  title: string;
}
defineProps<IProps>();
</script>
