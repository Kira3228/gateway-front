import { onMounted, ref, watch } from "vue";
import Sortable from "sortablejs";
import { usePresetStore } from "@/entities/preset/model/use-preset-store";
import { Header } from "@/shared-ui/src/components/DataTable";

export const useHeaderTable = () => {

  const presetStore = usePresetStore();
  const fields = ref<Header[]>([]);

  watch(
    () => presetStore.currentPreset,
    (newPreset) => {
      if (newPreset?.headers) {
        fields.value = [...newPreset.headers];
      }
    },
    { immediate: true, deep: true }
  );


  const items: Header[] = [
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
  const headers = ref<Header[]>(items);

  onMounted(() => {
    const tbody = document.querySelector(".settings-table tbody") as HTMLElement;

    if (tbody) {
      Sortable.create(tbody, {
        handle: ".drag-handle",
        animation: 150,
        ghostClass: "sortable-ghost",
        draggable: `tr`,
        onEnd({ newIndex, oldIndex }) {
          if (newIndex === undefined || oldIndex === undefined) return;
          if (newIndex === oldIndex) return;
          const newItems = [...fields.value];
          const item = newItems.splice(oldIndex, 1)[0];
          newItems.splice(newIndex, 0, item);
          fields.value = newItems;
          if (presetStore.currentPreset) {
            presetStore.currentPreset.headers = [...newItems];
          }
        },
      });
    }
  });



  return {
    headers,
    fields,

  }
}