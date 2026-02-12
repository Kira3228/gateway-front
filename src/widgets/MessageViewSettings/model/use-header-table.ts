import { onMounted, ref, watch } from "vue";
import Sortable from "sortablejs";
import { usePresetStore } from "@/entities/preset/model/use-preset-store";
import { Header } from "@/shared-ui/src/components/DataTable";
import { settingsHeaders } from "../ui/settings-headers";
import { defaultHeadersState } from '@/entities/preset/model/default-state'
export const useHeaderTable = () => {
  const presetStore = usePresetStore();

  const fields = ref<Header[]>(defaultHeadersState);
  const presetName = ref('');
  const headers = ref<Header[]>(settingsHeaders);

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



  return {
    headers,
    fields,
    presetName,
  }
}
