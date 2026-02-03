<template>
  <DataTable dense :headers="headers" :items="fields" :items-per-page="21">
    <template #item.isVisible="{ value, item }">
      <v-switch
        class="v-input--selection-controls"
        dense
        hide-details
        @change="handleDefaultSortChange(item)"
        v-model="item.isVisible"
      />
    </template>
    <template #item.sortable="{ value, item }">
      <v-switch
        class="v-input--selection-controls"
        dense
        hide-details
        @change="handleDefaultSortChange(item)"
        v-model="item.sortable"
      />
    </template>
    <template #item.defaultSort="{ value, item }">
      <div class="tw-flex tw-gap-4 tw-items-center tw-w-48">
        <UiSelect
          clearable
          :items="[`По возрастанию`, `По убыванию`, `Без сортировки`]"
        />
      </div>
    </template>
    <template #footer>
      <div class="tw-flex tw-flex-row-reverse">
        <Button class="tw-m-2" :height="24">Сохранить пресет</Button>
      </div>
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { items } from "@/widgets/HeaderList/items";
import { DataTable, Header } from "@/shared-ui/src/components/DataTable";
import { ref } from "vue";
import { Button } from "@/shared-ui/src/components/Button";
import { UiSelect } from "@/shared-ui/src/components/Select";
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
    text: `Видимость`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `isVisible`,
    width: 30,
  },
  {
    text: `Cортируемый`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `sortable`,
    width: 100,
  },
  {
    text: `Сортировка по умолчанию`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `defaultSort`,
    width: 100,
  },
];

const headers = ref<Header[]>(items1);
const fields = ref(items);

const mainObject = ref();

const handleDefaultSortChange = (data: any) => {
  console.log(data);
};
</script>
<style scoped>
.v-input--selection-controls {
  margin: 0;
  padding: 0;
}
</style>
