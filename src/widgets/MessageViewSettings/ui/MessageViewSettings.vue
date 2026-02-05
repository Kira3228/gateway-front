<template>
  <Dialog
    :value="value"
    @input="emit('input', $event)"
    title="Настройки представления"
  >
    <template #content>
      <HeaderTable />
    </template>
    <template #actions> </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { Button } from "@/shared-ui/src/components/Button";
import { Dialog } from "@/shared-ui/src/components/Dialog";
import { CloseIcon, SaveIcon } from "@/shared-ui/src/components/Icons";
import { HeaderTable } from "@/widgets/HeaderTable/ui/";

interface MessageViewSettingsProps {
  value?: boolean;
}

const props = defineProps<MessageViewSettingsProps>();

const emit = defineEmits<{
  (e: `input`, data: any): void;
}>();
</script>
