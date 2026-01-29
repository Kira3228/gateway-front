<template>
  <v-sheet class="tw-p-2 tw-h-full tw-flex tw-flex-col tw-overflow-hidden">
    <v-card-title>{{ title }}</v-card-title>
    <div class="tw-flex-1 tw-min-h-0 tw-flex tw-flex-col">
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
