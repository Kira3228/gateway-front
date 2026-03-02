<template>
  <Dialog :value="value" @input="emit('input', $event)" title="Экспорт">
    <template #content>
      <div class="tw-flex tw-flex-col tw-gap-5">
        <div class="tw-flex tw-gap-1">
          <TextInput
            class="tw-w-3/4"
            label="Имя файла"
            placeholder="document"
            v-model="messageExportStore.fileName"
          />
          <Select
            class="tw-w-1/4"
            :items="[`json`, `csv`]"
            v-model="messageExportStore.format"
            placeholder="json"
          />
        </div>
        <Select class="" label="Шаблон" />
      </div>
      <div>
        <v-checkbox label="Включить невидимые строки" />
        <v-checkbox label="Включить невидимые поля" />
      </div>
    </template>
    <template #actions>
      <div>
        <Button @click="handleDownloadClick" height="28">Экспорт</Button>
      </div>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { Button } from "@/shared-ui/src/components/Button";
import { Dialog } from "@/shared-ui/src/components/Dialog";
import Select from "@/shared-ui/src/components/Select/Select.vue";
import { TextInput } from "@/shared-ui/src/components/TextInput";
import { useMessageExport } from "../model/use-message-export";
import { useMessageExportStore } from "../model/use-message-export-store";

interface Props {
  value?: boolean;
}

const emit = defineEmits<{
  (e: `input`, data: any): void;
}>();

const props = defineProps<Props>();
const { handleDownloadClick } = useMessageExport();
const messageExportStore = useMessageExportStore();

const logFormat = (data: any) => {
  console.log(data);
};
</script>
