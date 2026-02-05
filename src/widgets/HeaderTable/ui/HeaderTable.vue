<template>
  <DataTable
    :headers="headers"
    :items="fields"
    class="settings-table"
    :page="page"
    item-key="value"
    :itemsPerPage="itemsPerPage"
  >
    <template #item.drag="{ item }">
      <div class="drag-handle" style="cursor: move; font-size: 20px">
        <span>⋮⋮</span>
      </div>
    </template>
    <template #item.isVisible="{ value, item }">
      <v-switch
        class="v-input--selection-controls"
        dense
        hide-details
        v-model="item.isVisible"
      />
    </template>
    <template #item.sortable="{ value, item }">
      <div>
        <v-switch
          class="v-input--selection-controls"
          dense
          hide-details
          v-model="item.sortable"
        />
      </div>
    </template>
    <template #item.defaultSort="{ value, item }">
      <div>
        <UiSelect
          :items="[`По возрастанию`, `По убыванию`, `Без сортировки`]"
        />
      </div>
    </template>
    <template #footer>
      <div class="tw-flex tw-flex-col tw-gap-2 tw-m-2">
        <TextInput
          label="Название"
          v-model="presetStore.currentPreset.presetName"
        />
        <div class="tw-flex">
          <Button @click="" text height="auto" color="blue">
            <div class="tw-flex tw-items-center tw-gap-1">
              <SaveIcon color="#2196F3" height="20" />
              Сохранить <br />
              новый
            </div>
          </Button>
          <Button text height="auto" color="blue">
            <div class="tw-flex tw-items-center tw-gap-1">
              <UpdateIcon height="20" />
              Обновить <br />
              текущий
            </div>
          </Button>
          <Button text height="32" color="red">
            <div class="tw-flex tw-items-center tw-gap-1">
              <CloseIcon height="20" />
              Отмена
            </div>
          </Button>
        </div>
      </div>
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { DataTable } from "@/shared-ui/src/components/DataTable";
import { computed, ref } from "vue";
import { Button } from "@/shared-ui/src/components/Button";
import { UiSelect } from "@/shared-ui/src/components/Select";
import { TextInput } from "@/shared-ui/src/components/TextInput";
import {
  CloseIcon,
  SaveIcon,
  UpdateIcon,
} from "@/shared-ui/src/components/Icons";
import { usePresetStore } from "@/entities/preset/model/use-preset-store";
import { useHeaderTable } from "../model/use-header-table";

const page = ref(1);
const itemsPerPage = ref(21);

const { fields, headers } = useHeaderTable();
const presetStore = usePresetStore();
</script>
<style scoped>
.v-input--selection-controls {
  margin: 0;
  padding: 0;
}

:deep(.v-select__selection) {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
