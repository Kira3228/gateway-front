<template>
  <DataTable
    :headers="headers"
    :items="fields"
    class="settings-table"
    :page="1"
    item-key="value"
    :itemsPerPage="21"
  >
    <template #item.drag>
      <div class="drag-handle" style="cursor: move; font-size: 20px">
        <span>⋮⋮</span>
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
    <template #item.sortable="{ value, item }">
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
        <TextInput label="Название" v-model="presetName" />
        <div
          class="tw-flex tw-justify-between tw-items-center tw-gap-1 tw-mt-2"
        >
          <Button @click="save" outlined height="auto" color="blue">
            <div class="tw-flex tw-items-center tw-gap-1">
              <SaveIcon color="#2196F3" height="20" />
              <span>
                Сохранить <br />
                новый
              </span>
            </div>
          </Button>
          <Button outlined height="32" color="red">
            <div class="tw-flex tw-items-center tw-gap-1">
              <CloseIcon height="20" />
              <span>Отмена </span>
            </div>
          </Button>
        </div>
      </div>
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { DataTable } from "@/shared-ui/src/components/DataTable";
import { Button } from "@/shared-ui/src/components/Button";
import { UiSelect } from "@/shared-ui/src/components/Select";
import { TextInput } from "@/shared-ui/src/components/TextInput";
import { CloseIcon, SaveIcon } from "@/shared-ui/src/components/Icons";
import { useHeaderTable } from "../model/use-header-table";

const { fields, headers, presetName, save } = useHeaderTable();
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
