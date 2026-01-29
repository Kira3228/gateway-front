<template>
  <v-tooltip top>
    <template #activator="{ on, attrs }">
      <v-btn
        @click="$emit('click', $event)"
        :disabled="isDisabled"
        :elevation="elevation"
        :color="color"
        :height="height"
        :outlined="outlined"
        v-on="on"
        v-bind="attrs"
      >
        <template #default>
          <slot></slot>
        </template>
      </v-btn>
    </template>
    <span>{{ tooltipText }}</span>
  </v-tooltip>
</template>
<script lang="ts" setup>
interface IProps {
  title?: string;
  isDisabled?: boolean;
  color?: string;
  outlined?: boolean;
  height?: number;
  elevation?: number;
  tooltipText?: string;
}
withDefaults(defineProps<IProps>(), {
  outlined: false,
  elevation: 2,
  isDisabled: false,
  color: "",
});
</script>
