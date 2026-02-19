<template>
  <AccordionSection :title="title">
    <DateRange first-label="От" second-label="До" :value="value" @input="handleInput" />
  </AccordionSection>
</template>
<script setup lang="ts">
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";
import { DateRange } from "@/shared-ui/src/components/DateRange";

interface Props {
  title: string;
  value?: [string | undefined, string | undefined];
  firstLabel?: string;
  secondLabel?: string;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (
    e: "input",
    data: [string | undefined | null, string | undefined | null],
  ): void;
}>();

const handleInput = (
  data: [string | undefined | null, string | undefined | null],
) => {
  emit(`input`, data);
};
</script>
