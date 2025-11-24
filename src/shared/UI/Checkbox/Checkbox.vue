<template>
  <v-checkbox @change="handleClick" :label="label"></v-checkbox>
</template>

<script lang="ts" setup>
import { useDebounce } from "@/shared/lib/debounce";
interface IProps {
  label: string;
  value: boolean;
}
const { debounce } = useDebounce();
defineProps<IProps>();
const emit = defineEmits<{
  (e: `input`, value: boolean): void;
  (e: `debounce`, value: boolean): void;
}>();
const handleClick = (newValue: boolean) => {
  emit("input", newValue);
  debounce(() => {
    emit(`debounce`, newValue);
  });
};
</script>
