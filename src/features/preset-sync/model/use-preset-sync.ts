import { usePresetStore } from "@/entities/preset/model/use-preset-store"
import { updateUrl } from "@/shared/lib/update-url"
import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router/composables"

export const usePresetSync = () => {
  const route = useRoute()
  const router = useRouter()
  const presetStore = usePresetStore()

  const DEFAULT_PRESET = 'standart';

  const presetName = ref<string | undefined>(
    (route.query.preset as string) || DEFAULT_PRESET,
  );

  onMounted(() => {
    presetStore.loadPresets()
  })

  watch(presetName, (newPresetName) => {

    const urlValue = newPresetName === DEFAULT_PRESET ? null : newPresetName;

    updateUrl({
      preset: newPresetName
    }, route, router)
  });
  watch(
    () => route.query.preset,
    async (newPresetFromUrl) => {
      const targetPreset = (newPresetFromUrl as string) || DEFAULT_PRESET;

      if (presetName.value !== targetPreset) {
        presetName.value = targetPreset;
      }

      if (presetStore.currentPreset?.presetName !== targetPreset) {
        await presetStore.loadPreset(targetPreset);
      }
    },
    { immediate: true }
  );
  return {
    presetStore, presetName
  }
}