import { usePresetStore } from "@/entities/preset/model/store"
import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router/composables"

export const usePresetSync = () => {
  const route = useRoute()
  const router = useRouter()

  const presetStore = usePresetStore()

  const presetName = ref<string | undefined>(
    (route.query.preset as string) || undefined,
  );

  const updateUrl = () => {
    const query = { ...route.query };
    if (presetName.value) query.preset = presetName.value;
    else delete query.preset;

    router.replace({ query }).catch(() => { });
  };

  onMounted(() => {
    presetStore.loadPresets()
  })

  watch(presetName, updateUrl);
  watch(
    () => route.query,
    (newQuery) => {
      const newPreset = (newQuery.preset as string) || undefined;
      if (presetName.value !== newPreset) presetName.value = newPreset;

      presetStore.loadPreset(presetName.value)
    },
    { immediate: true },
  );

  return {
    presetStore, presetName
  }
}