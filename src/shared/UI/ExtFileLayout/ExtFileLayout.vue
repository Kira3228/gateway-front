<template>
  <v-sheet class="tw-p-3" width="100%">
    <v-card-title>{{ title }}</v-card-title>
    <div class="tw-flex">
      <slot></slot>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: `Заголовок`,
    },
  },
});
</script>
