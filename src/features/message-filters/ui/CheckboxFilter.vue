<template>
  <AccordionSection :title="title">
    <CheckBoxGroup :items="items" :value="value" @input="handleInput" />
    <Button @click="handleClick" small text>Сбросить</Button>
  </AccordionSection>
</template>
<script setup lang="ts" generic="T">
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";
import { Button } from "@/shared-ui/src/components/Button";
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
const handleClick = () => {
  emit(`input`, []);
};
</script>
