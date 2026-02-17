<template>
  <AccordionSection title="Обновлено">
    <DateRange />
  </AccordionSection>
</template>
<script setup lang="ts">
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";
import { DateRange } from "@/shared-ui/src/components/DateRange";

interface Props {}
const props = defineProps<Props>();
</script>
