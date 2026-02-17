<template>
  <AccordionSection title="Метка безопасности">
    <CheckBoxGroup :items="Object.values(SecurityLabelEnum)" />
  </AccordionSection>
</template>
<script setup lang="ts">
import { SecurityLabelEnum } from "@/entities/message/model/types";
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";
import { CheckBoxGroup } from "@/shared-ui/src/components/CheckBoxGroup";

interface Props {}
const props = defineProps<Props>();
</script>
