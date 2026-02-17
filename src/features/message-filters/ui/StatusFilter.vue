<template>
  <AccordionSection title="Статус">
    <CheckBoxGroup :items="Object.values(MessageStatusEnum)" />
  </AccordionSection>
</template>
<script setup lang="ts">
import { MessageStatusEnum } from "@/entities/statusHistory";
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";
import { CheckBoxGroup } from "@/shared-ui/src/components/CheckBoxGroup";

interface Props {}
const props = defineProps<Props>();
</script>
