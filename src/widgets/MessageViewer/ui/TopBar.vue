<script setup lang="ts">
import { PresetSelect } from "@/features/preset-sync";
import { Button } from "@/shared-ui/src/components/Button";
import { FilterIcon } from "@/shared-ui/src/components/Icons";
import { Option, Options } from "@/shared-ui/src/components/Options";

const props = defineProps<{
  onFilter?: () => void;
  onOptions?: (data: Option) => void;
}>();
</script>

<template>
  <div class="tw-flex tw-justify-between tw-items-baseline">
    <div>
      <PresetSelect class="tw-flex-1 pa-3" />
    </div>

    <div class="tw-flex tw-gap-2">
      <Button @click="onFilter" color="black" :height="28" outlined>
        <div class="tw-flex tw-items-center tw-gap-2">
          <FilterIcon width="18" />
          Все фильтры
        </div>
      </Button>
      <Options
        @click="onOptions"
        :items="[
          { text: `Настройки отображения`, to: { name: 'settings' } },
          { text: `Эксопрт данных`, to: { name: 'export' } },
        ]"
      />
    </div>
  </div>
</template>
