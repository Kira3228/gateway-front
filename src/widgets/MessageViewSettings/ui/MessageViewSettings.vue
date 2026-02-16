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
            :preset-name.sync="presetStore.newCustomPresetName"
            :headers="headers"
          >
            <template #footer>
              <div class="tw-flex tw-flex-col tw-gap-2 tw-m-3">
                <v-form ref="formRef" v-model="valid" lazy-validation>
                  <TextInput
                    :rules="nameRules"
                    label="Название"
                    v-model="presetStore.newCustomPresetName"
                  />
                  <div
                    class="tw-flex tw-justify-between tw-items-center tw-gap-1 tw-mt-2 tw-m-3"
                  >
                    <Button
                      :disabled="!valid"
                      @click="handleCreatePreset"
                      outlined
                      height="32"
                      color="blue"
                    >
                      <div class="tw-flex tw-items-center tw-gap-1">
                        <SaveIcon color="#2196F3" height="20" />
                        <span> Сохранить </span>
                      </div>
                    </Button>
                    <Button outlined height="32" color="red">
                      <div class="tw-flex tw-items-center tw-gap-1">
                        <CloseIcon height="20" />
                        <span>Отмена </span>
                      </div>
                    </Button>
                  </div>
                </v-form>
              </div>
            </template>
          </SettingsTable>
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
import { useCreatePreset } from "../model/use-create-preset";
import UpdatePresetTab from "./UpdatePresetTab.vue";
import { ref } from "vue";
import { TextInput } from "@/shared-ui/src/components/TextInput";
import { CloseIcon, SaveIcon } from "@/shared-ui/src/components/Icons";
import { Button } from "@/shared-ui/src/components/Button";

interface MessageViewSettingsProps {
  value?: boolean;
}

const props = defineProps<MessageViewSettingsProps>();

const emit = defineEmits<{
  (e: `input`, data: any): void;
}>();

const presetStore = usePresetStore();
const { handleCreatePreset } = useCreatePreset();
const { headers } = useHeaderTable();

const valid = ref<boolean>(true);

const nameRules = [
  (v: string) => !!v || "Название обязательно!",
  (v: string) =>
    (v && v.length <= 15) || "Название должно быть не длиннее 10 символов!",
  (v: string) => !/\d/.test(v) || "Цифры запрещены!",
];
</script>
<style scoped>
:deep(.v-window__container) {
  height: 100%;
}
</style>
