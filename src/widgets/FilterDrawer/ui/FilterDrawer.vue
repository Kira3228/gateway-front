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
    <div class="tw-m-2 tw-h-full">
      <v-btn icon @click.stop="handleInput(false)">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <div
        class="tw-p-3 tw-h-full tw-flex tw-flex-col tw-gap-4 tw-justify-between"
      >
        <div class="tw-flex tw-flex-col tw-gap-3">
          <v-expansion-panels accordion multiple dense>
            <v-expansion-panel>
              <v-expansion-panel-header>Категрия</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-checkbox dense label="label" value="value"></v-checkbox>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Тип сообщения</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-checkbox dense label="label" value="value"></v-checkbox>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>Статус</v-expansion-panel-header>
              <v-expansion-panel-content :height="10" dense>
                <v-checkbox
                  dense
                  v-for="status in MessageStatusEnum"
                  :label="status"
                  value="value"
                  :key="status"
                ></v-checkbox>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                Метка безопасности
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-checkbox
                  dense
                  v-for="label in SecurityLabelEnum"
                  :label="label"
                  value="value"
                  :key="label"
                ></v-checkbox>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <Button height="28" class="tw-self-center tw-text-white">
          <span class="tw-text-white">Применить фильтры </span>
        </Button>
      </div>
    </div>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import {
  MessageStatusEnum,
  SecurityLabelEnum,
} from "@/entities/message/model/types";
import { Button } from "@/shared-ui/src/components/Button";
interface FilterDrawerProps {
  value?: boolean;
}
const props = defineProps<FilterDrawerProps>();
const emit = defineEmits<{ (e: `input`, data: boolean): void }>();

const handleInput = (data: boolean) => {
  emit(`input`, data);
};
</script>
