<template>
  <div class="tw-flex tw-gap-2">
    <v-btn-toggle v-for="group in items" :key="group[0].key">
      <button-vue
        v-for="btn in group"
        @click="handleClick(btn)"
        :key="btn.key"
        :height="height"
        outlined
        :elevation="0"
      >
        <component :is="btn.component" />
      </button-vue>
    </v-btn-toggle>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import ButtonVue from "../Button/Button.vue";
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";

const activeBtnKey = ref<number | null>(null);

defineProps<{
  height: number;
  items: TButtonGroupItem[][];
}>();

const emit = defineEmits<{
  (e: `click-order`, value: TButtonGroupItem | null): void;
}>();

const handleClick = (btnData: TButtonGroupItem) => {
  if (activeBtnKey.value === btnData.key) {
    activeBtnKey.value = null;
    emit(`click-order`, null);
  } else {
    activeBtnKey.value = btnData.key;
    emit(`click-order`, btnData);
  }
};
</script>
