<template>
  <DataTable dense :headers="headers" :items="fields" :items-per-page="21">
    <template #select-preset> </template>
    <template #item.align="{ value, item }">
      <UiSelect return-object :items="alignItems" v-model="value" />
    </template>
    <template #item.isVisible="{ value, item }">
      <v-switch
        class="v-input--selection-controls"
        dense
        hide-details
        v-model="value"
      />
    </template>
    <template #item.sortable="{ value, item }">
      <v-switch
        class="v-input--selection-controls"
        dense
        hide-details
        v-model="value"
      />
    </template>
    <template #footer>
      <div class="tw-flex tw-flex-row-reverse">
        <Button>Сохранить пресет</Button>
      </div>
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { items } from "@/widgets/HeaderList/items";
import { DataTable, Header } from "@/shared-ui/src/components/DataTable";
import { ref } from "vue";
import { UiSelect } from "@/shared-ui/src/components/Select";
import { Button } from "@/shared-ui/src/components/Button";
const items1: Header[] = [
  {
    text: `Поле`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `text`,
    width: 10,
  },
  {
    text: `Выравнивание`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `align`,
    width: 100,
  },
  {
    text: `Видимость`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `isVisible`,
    width: 30,
  },
  {
    text: `Сортировка`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `sortable`,
    width: 100,
  },
];

const alignItems = ref([
  {
    value: `center`,
    text: `По центру`,
  },
]);
const headers = ref<Header[]>(items1);
const fields = ref(items);
</script>
<style scoped>
.v-input--selection-controls {
  margin: 0;
  padding: 0;
}
</style>
