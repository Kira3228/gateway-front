import { usePresetStore } from "@/entities/preset/model/store"
import { updateUrl } from "@/shared/lib/update-url"
import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router/composables"

export const usePresetSync = () => {
  const route = useRoute()
  const router = useRouter()
  const presetStore = usePresetStore()

  const presetName = ref<string | undefined>(
    (route.query.preset as string) || undefined,
  );

  onMounted(() => {
    presetStore.loadPresets()
  })

  watch(presetName, (newPresetName) => {
    updateUrl({
      preset: newPresetName
    }, route, router)
  });

  watch(
    () => route.query.preset,
    (newPresetFromUrl) => {
      const newPreset = (newPresetFromUrl as string) || undefined;

      if (presetName.value !== newPreset) {
        presetName.value = newPreset;
      }

      if (newPreset) {
        presetStore.loadPreset(newPreset);
      }
    },
    { immediate: true }
  );
  return {
    presetStore, presetName
  }
}