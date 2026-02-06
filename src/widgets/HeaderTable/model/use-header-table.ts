import { onMounted, ref, watch } from "vue";
import Sortable from "sortablejs";
import { usePresetStore } from "@/entities/preset/model/use-preset-store";
import { Header } from "@/shared-ui/src/components/DataTable";
import { settingsHeaders } from "./settings-headers";

export const useHeaderTable = () => {
  const presetStore = usePresetStore();

  const fields = ref<Header[]>([]);
  const presetName = ref('');
  const headers = ref<Header[]>(settingsHeaders);

  watch(
    () => presetStore.currentPreset,
    (newPreset) => {
      if (newPreset?.headers) {
        fields.value = JSON.parse(JSON.stringify(newPreset.headers));

        if (newPreset.displayName) {
          presetName.value = newPreset.displayName;
        }
      }
    },
    { immediate: true }
  );

  onMounted(() => {
    const tbody = document.querySelector(".settings-table tbody") as HTMLElement;

    if (tbody) {
      Sortable.create(tbody, {
        handle: ".drag-handle",
        animation: 150,
        ghostClass: "sortable-ghost",
        draggable: `tr`,
        onEnd({ newIndex, oldIndex }) {
          if (newIndex === undefined || oldIndex === undefined || newIndex === oldIndex) return;

          const newItems = [...fields.value];
          const item = newItems.splice(oldIndex, 1)[0];
          newItems.splice(newIndex, 0, item);

          fields.value = newItems;
        },
      });
    }
  });

  const save = async () => {
    await presetStore.createNewPreset(presetName.value, fields.value);
  }

  return {
    headers,
    fields,
    presetName,
    save
  }
}
