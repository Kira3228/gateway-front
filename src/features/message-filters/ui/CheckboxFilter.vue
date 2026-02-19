<template>
  <AccordionSection :title="title">
    <CheckBoxGroup :items="items" :value="value" @input="handleInput" />
  </AccordionSection>
</template>
<script setup lang="ts" generic="T">
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";
import { CheckBoxGroup } from "@/shared-ui/src/components/CheckBoxGroup";

interface Props {
  title: string;
  items: T[];
  value?: string[];
}
const props = defineProps<Props>();

const emit = defineEmits<{ (e: `input`, data: string[]): void }>();

const handleInput = (data: string[]) => {
  emit(`input`, data);
};
</script>
