<template>
  <AccordionSection title="Приоритет">
    <Range :value="value" @input="handleInput" />
  </AccordionSection>
</template>
<script setup lang="ts">
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";
import { Range } from "@/shared-ui/src/components/Range";
import { useMessageFiltersStore } from "../model/use-message-filters-store";

interface Props {
  value?: [number | null, number | null];
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: `input`, data: [number | null, number | null]): void;
}>();

const handleInput = (data: [number | null, number | null]) => {
  emit(`input`, data);
};
</script>
