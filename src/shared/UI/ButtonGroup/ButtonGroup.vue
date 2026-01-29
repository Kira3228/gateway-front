<template>
  <div class="tw-flex tw-gap-1">
    <v-btn-toggle v-for="group in items" :key="group[0].key">
      <button-vue
        v-for="btn in group"
        @click="handleClick(btn)"
        :key="btn.key"
        :height="height"
        outlined
        :elevation="0"
        :tooltip-text="btn.tooltipText"
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

type TEmitData = {
  key: number;
  sortField: string;
  sortOrder: "" | "ASC" | "DESC";
};
defineProps<{
  height: number;
  items: TButtonGroupItem[][];
}>();

const emit = defineEmits<{
  (e: `click-order`, value: TEmitData): void;
}>();

const handleClick = (btnData: TButtonGroupItem) => {
  emit(`click-order`, {
    key: btnData.key,
    sortField: btnData.value.sortField,
    sortOrder: btnData.value.sortOrder,
  });
};
</script>
