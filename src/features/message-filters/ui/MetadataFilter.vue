<template>
  <accordion-section title="Метаданные">
    <div class="tw-flex tw-gap-4">
      <v-radio-group :value="value" @change="handleChange" row>
        <v-radio
          v-for="item in metadataFilters"
          :key="item.label"
          :label="item.label"
          :value="item.value"
        ></v-radio>
      </v-radio-group>
    </div>
    <Button @click="handleReset" small text>Сбросить</Button>
  </accordion-section>
</template>

<script setup lang="ts">
import { AccordionSection } from "@/shared-ui/src/components/AccordionSection";
import { Button } from "@/shared-ui/src/components/Button";

export type RadioButtonItem = {
  label: string;
  value: string | boolean;
};

interface Props {
  value?: string | boolean | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "input", value: string | boolean | null): void;
}>();

const handleChange = (newValue: string | boolean) => {
  emit("input", newValue);
};

const handleReset = () => {
  emit("input", null);
};

const metadataFilters: RadioButtonItem[] = [
  { label: "Да", value: true },
  { label: "Нет", value: false },
];
</script>
