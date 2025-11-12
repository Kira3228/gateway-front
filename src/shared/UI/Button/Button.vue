<template>
  <v-btn
    @click="$emit(`click`, $event)"
    :disabled="isDisabled"
    elevation="2"
    :color="color"
    :height="height"
    :outlined="outlined"
  >
    <template #default>
      <slot></slot>
    </template>
  </v-btn>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: `CustomButton`,
  props: {
    title: {
      type: String,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 48,
    },
  },
});
</script>
