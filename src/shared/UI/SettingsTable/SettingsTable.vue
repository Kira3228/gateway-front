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
    <template #item.isVisible="{ item }">
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
      <slot name="footer" />
    </template>
  </DataTable>
</template>
<script lang="ts" setup>
import { DataTable, Header } from "@/shared-ui/src/components/DataTable";
import { onMounted, ref, watch } from "vue";
import Sortable from "sortablejs";
import { UiSelect } from "@/shared-ui/src/components/Select";
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

const localFields = ref<Header[]>([]);

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
  localFields,
  (newVal) => {
    emit("input", newVal);
  },
  { deep: true },
);

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
