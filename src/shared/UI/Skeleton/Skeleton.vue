<template>
  <div class="tw-flex-col tw-gap-2">
    <v-skeleton-loader
      v-for="n in quantity"
      :key="n"
      max-height="height"
      type="type"
    ></v-skeleton-loader>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    quantity: {
      type: Number,
      default: 1,
    },
    height: {
      type: String,
      default: "100px",
    },
    type: {
      type: String,
      default: "Card",
    },
  },
});
</script>
