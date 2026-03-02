<template>
  <Dialog
    :value="value"
    @input="emit('input', $event)"
    title="Настройки представления"
  >
    <template #content>
      <v-tabs vertical>
        <v-tab>Создать пресет</v-tab>
        <v-tab>Сохранённые пресеты</v-tab>
        <v-tab>Исключения </v-tab>
        <v-tab-item>
          <CreatePresetTab />
        </v-tab-item>
        <v-tab-item class="tw-h-full">
          <UpdatePresetTab />
        </v-tab-item>
        <v-tab-item></v-tab-item>
      </v-tabs>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { Dialog } from "@/shared-ui/src/components/Dialog";
import UpdatePresetTab from "./UpdatePresetTab.vue";
import CreatePresetTab from "./CreatePresetTab.vue";

interface MessageViewSettingsProps {
  value?: boolean;
}

const props = defineProps<MessageViewSettingsProps>();

const emit = defineEmits<{
  (e: `input`, data: any): void;
}>();
</script>
<style scoped>
:deep(.v-window__container) {
  height: 100%;
}
</style>
