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
        <v-tab-item>
          <SettingsTable
            v-model="presetStore.newCustomPreset"
            :presetName.sync="presetStore.newCustomPresetName"
            :headers="headers"
            @save="handleCreatePreset"
          />
        </v-tab-item>
        <v-tab-item class="tw-h-full"> <UpdatePresetTab /></v-tab-item>
      </v-tabs>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { Dialog } from "@/shared-ui/src/components/Dialog";
import { SettingsTable } from "@/shared/UI/SettingsTable";
import { useHeaderTable } from "@/widgets/MessageViewSettings/model/use-header-table";
import { usePresetStore } from "@/entities/preset/model/use-preset-store";
import { computed, ref } from "vue";
import { Preset } from "@/features/preset-sync";
import { useCreatePreset } from "../model/use-create-preset";
import UpdatePresetTab from "./UpdatePresetTab.vue";

interface MessageViewSettingsProps {
  value?: boolean;
}

const props = defineProps<MessageViewSettingsProps>();

const emit = defineEmits<{
  (e: `input`, data: any): void;
}>();

const presetStore = usePresetStore();
const { handleCreatePreset } = useCreatePreset();
const { fields, headers } = useHeaderTable();

const activePresetIdx = ref();

const deletePreset = (presetName: string) => {
  presetStore.deleteTablePreset(presetName);
  console.log(`Удаление: ${presetName}`);
};

const tabsChangeHandler = (data: any) => {
  console.log(`@change`, data);
};

const handleUpdate = (data: Preset) => {};
</script>
<style scoped>
:deep(.v-window__container) {
  height: 100%;
}

.preset__list {
  height: 500px;
}
</style>
