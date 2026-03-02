<template>
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
</template>
<script setup lang="ts">
import { usePresetStore } from "@/entities/preset/model/use-preset-store";
import { useHeaderTable } from "../model/use-header-table";
import { ref } from "vue";
import { useCreatePreset } from "../model/use-create-preset";
import { SettingsTable } from "@/shared/UI/SettingsTable";
import { TextInput } from "@/shared-ui/src/components/TextInput";
import { Button } from "@/shared-ui/src/components/Button";
import { CloseIcon, SaveIcon } from "@/shared-ui/src/components/Icons";

interface Props {}
const props = defineProps<Props>();

const presetStore = usePresetStore();
const { headers } = useHeaderTable();
const formRef = ref<any>(null);
const { handleCreatePreset } = useCreatePreset(formRef);

const nameRules = [
  (v: string) => !!v || "Название обязательно!",
  (v: string) =>
    (v && v.length <= 15) || "Название должно быть не длиннее 10 символов!",
  (v: string) => !/\d/.test(v) || "Цифры запрещены!",
];
const valid = ref<boolean>(true);
</script>
