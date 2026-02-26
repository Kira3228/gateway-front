<template>
  <Dialog :value="value" @input="emit('input', $event)" title="Экспорт">
    <template #content>
      <div class="tw-flex tw-flex-col tw-gap-5">
        <div class="tw-flex tw-gap-1">
          <TextInput
            class="tw-w-3/4"
            label="Имя файла"
            placeholder="document"
          />
          <Select class="tw-w-1/4" />
        </div>
        <Select class="" label="Шаблон" />
      </div>
      <v-checkbox label="Включить невидимые строки" />
    </template>
    <template #actions>
      <div class="">
        <Button height="28">Экспорт</Button>
      </div>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { Button } from "@/shared-ui/src/components/Button";
import { Dialog } from "@/shared-ui/src/components/Dialog";
import Select from "@/shared-ui/src/components/Select/Select.vue";
import { TextInput } from "@/shared-ui/src/components/TextInput";

interface Props {
  value?: boolean;
}

const emit = defineEmits<{
  (e: `input`, data: any): void;
}>();

const props = defineProps<Props>();
</script>
