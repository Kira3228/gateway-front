<template>
  <v-navigation-drawer
    class="tw-max-h-screen"
    fixed
    right
    overlay-opacity="0.3"
    temporary
    width="400"
    :value="value"
    @input="handleInput"
  >
    <div class="tw-h-full tw-relative tw-flex tw-flex-col">
      <div class="tw-p-3 tw-flex-shrink-0">
        <v-btn icon @click.stop="handleInput(false)">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <FilterList />
    </div>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { Button } from "@/shared-ui/src/components/Button";
import { FilterList } from "@/features/message-filters/ui";

interface FilterDrawerProps {
  value?: boolean;
}
const props = defineProps<FilterDrawerProps>();
const emit = defineEmits<{ (e: `input`, data: boolean): void }>();

const handleInput = (data: boolean) => {
  emit(`input`, data);
};
</script>
