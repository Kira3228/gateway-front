<template>
  <v-btn
    @click="$emit('click', $event)"
    :disabled="isDisabled"
    :elevation="elevation"
    :color="color"
    :height="height"
    :outlined="outlined"
  >
    <template #default>
      <slot></slot>
    </template>
  </v-btn>
</template>
<script lang="ts" setup>
interface IProps {
  title?: string;
  isDisabled?: boolean;
  color?: string;
  outlined?: boolean;
  height?: number;
  elevation?: number;
}
withDefaults(defineProps<IProps>(), {
  outlined: false,
  elevation: 2,
  isDisabled: false,
  color: "",
});
</script>
