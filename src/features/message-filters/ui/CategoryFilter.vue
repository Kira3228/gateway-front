<template>
  <AccordionSection title="Категрия">
    <CheckBoxGroup :items="Object.values(MessageCategory)" />
  </AccordionSection>
</template>
<script setup lang="ts">
import { MessageCategory } from "@/entities/message/model/types";
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";
import { CheckBoxGroup } from "@/shared-ui/src/components/CheckBoxGroup";

interface Props {}
const props = defineProps<Props>();
</script>
