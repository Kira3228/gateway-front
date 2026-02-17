<template>
  <AccordionSection title="Тип сообщения">
    <CheckBoxGroup :items="Object.values(MessageType)" />
  </AccordionSection>
</template>
<script setup lang="ts">
import { MessageType } from "@/entities/message/model/types";
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";

interface Props {}
const props = defineProps<Props>();
</script>
