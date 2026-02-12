<template>
  <DataTable
    :headers="headers"
    :items="localFields"
    class="settings-table"
    :page="1"
    item-key="value"
    :itemsPerPage="21"
  >
    <template #item.drag>
      <div class="drag-handle" style="cursor: move; font-size: 20px">
        <span class="tw-m-3">⋮⋮</span>
      </div>
    </template>
    <template #item.isVisible="{ value, item }">
      <v-switch
        inset
        class="v-input--selection-controls"
        dense
        hide-details
        v-model="item.isVisible"
      />
    </template>
    <template #item.sortable="{ item }">
      <div>
        <v-switch
          inset
          class="v-input--selection-controls"
          dense
          hide-details
          v-model="item.sortable"
        />
      </div>
    </template>
    <template #item.defaultSort>
      <div>
        <UiSelect
          :items="[`По возрастанию`, `По убыванию`, `Без сортировки`]"
        />
      </div>
    </template>
    <template #footer>
      <div class="tw-flex tw-flex-col tw-gap-2 tw-m-3">
        <v-form ref="formRef" v-model="valid" lazy-validation>
          <TextInput
            :rules="nameRules"
            label="Название"
            v-model="localPresetName"
          />
          <div
            class="tw-flex tw-justify-between tw-items-center tw-gap-1 tw-mt-2"
          >
            <Button
              :disabled="!valid"
              @click="handleSave"
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
  </DataTable>
</template>
<script lang="ts" setup>
import { DataTable, Header } from "@/shared-ui/src/components/DataTable";
import { onMounted, ref, watch } from "vue";
import Sortable from "sortablejs";
import { Button } from "@/shared-ui/src/components/Button";
import { UiSelect } from "@/shared-ui/src/components/Select";
import { TextInput } from "@/shared-ui/src/components/TextInput";
import { CloseIcon, SaveIcon } from "@/shared-ui/src/components/Icons";
import { getCurrentInstance } from "vue";

interface SettingsTableProps {
  value?: Header[];
  headers: Header[];
  presetName?: string;
}
const props = defineProps<SettingsTableProps>();

const emit = defineEmits<{
  (e: "input", value: Header[]): void;
  (e: "update:presetName", value: string): void;
  (e: "save", data: { presetName: string; settingsBody: Header[] }): void;
  (e: "cancel"): void;
}>();

const instance = getCurrentInstance();

const valid = ref<boolean>(true);
const formRef = ref<any>(null);
const localFields = ref<Header[]>([]);
const localPresetName = ref(props.presetName || "");

const clone = (v: any) => JSON.parse(JSON.stringify(v ?? []));

watch(
  () => props.value,
  (newVal) => {
    const incoming = clone(newVal);
    if (JSON.stringify(incoming) !== JSON.stringify(localFields.value)) {
      localFields.value = incoming;
    }
  },
  { immediate: true, deep: true },
);

watch(
  () => props.presetName,
  (newVal) => {
    localPresetName.value = newVal || "";
  },
);

watch(
  localFields,
  (newVal) => {
    emit("input", newVal);
  },
  { deep: true },
);

watch(localPresetName, (data) => {
  emit("update:presetName", data);
});

const handleSave = () => {
  const isValid = formRef.value?.validate();

  if (isValid) {
    emit("save", {
      presetName: localPresetName.value,
      settingsBody: localFields.value,
    });
  }
};

const nameRules = [
  (v: string) => !!v || "Название обязательно!",
  (v: string) =>
    (v && v.length <= 15) || "Название должно быть не длиннее 10 символов!",
  (v: string) => !/\d/.test(v) || "Цифры запрещены!",
];

onMounted(() => {
  const tableEl = instance?.proxy?.$el.querySelector(
    `.settings-table tbody`,
  ) as HTMLElement;

  if (tableEl) {
    Sortable.create(tableEl, {
      handle: ".drag-handle",
      animation: 150,
      ghostClass: "sortable-ghost",
      draggable: `tr`,
      onEnd({ newIndex, oldIndex }) {
        if (
          newIndex === undefined ||
          oldIndex === undefined ||
          newIndex === oldIndex
        )
          return;

        const newItems = [...localFields.value];
        const item = newItems.splice(oldIndex, 1)[0];
        newItems.splice(newIndex, 0, item);

        localFields.value = newItems;
      },
    });
  }
});
</script>
