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
        @change="handleDefaultSortChange(item)"
        v-model="item.isVisible"
      />
    </template>
    <template #item.sortable="{ value, item }">
      <div>
        <v-switch
          class="v-input--selection-controls"
          dense
          hide-details
          @change="handleDefaultSortChange(item)"
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
      <div class="tw-flex tw-flex-row-reverse">
        <Button @click="handleClick" class="tw-m-2" :height="24"
          >Сохранить пресет</Button
        >
      </div>
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { items } from "@/widgets/HeaderList/items";
import { DataTable, Header } from "@/shared-ui/src/components/DataTable";
import { onMounted, ref } from "vue";
import { Button } from "@/shared-ui/src/components/Button";
import { UiSelect } from "@/shared-ui/src/components/Select";
import Sortable from "sortablejs";

const page = ref(1);
const itemsPerPage = ref(21);

onMounted(() => {
  const tbody = document.querySelector(".settings-table tbody") as HTMLElement;

  if (tbody) {
    Sortable.create(tbody, {
      handle: ".drag-handle", // Перетаскивать только за ручку (важно, чтобы свитчи работали!)
      animation: 150,
      ghostClass: "sortable-ghost", // Класс для элемента-призрака
      draggable: `tr`,
      onEnd({ newIndex, oldIndex }) {
        if (newIndex === undefined || oldIndex === undefined) return;
        if (newIndex === oldIndex) return;
        const newItems = [...fields.value];
        const item = newItems.splice(oldIndex, 1)[0];
        newItems.splice(newIndex, 0, item);
        fields.value = newItems;
        console.log(
          `Переместили  с ${oldIndex} на ${newIndex}. Элемент теперь на позиции: ${fields.value.indexOf(
            item,
          )}`,
        );
      },
    });
  }
});

const items1: Header[] = [
  {
    text: "",
    value: "drag",
    sortable: false,
    width: 30,
    align: "center",
    isVisible: true,
  },
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
    width: 30,
  },
  {
    text: `Сортировка по умолчанию`,
    align: "center",
    isVisible: true,
    sortable: false,
    value: `defaultSort`,
    width: 190,
  },
];

const headers = ref<Header[]>(items1);
const fields = ref(items);

const handleClick = () => {
  console.log(`Поля`, fields.value);
};

const handleDefaultSortChange = (data: any) => {
  console.log(data);
};
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
