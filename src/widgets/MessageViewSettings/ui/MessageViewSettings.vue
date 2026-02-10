<template>
  <Dialog
    :value="value"
    @input="emit('input', $event)"
    title="Настройки представления"
  >
    <template #content>
      <v-tabs vertical>
        <v-tab>Создать пресет</v-tab>
        <v-tab>Сохранённые пресеты</v-tab>

        <v-tab-item>
          <SettingsTable
            v-model="presetStore.newCustomPreset"
            :presetName.sync="presetStore.newCustomPresetName"
            :headers="headers"
            @save="handleSave"
          />
        </v-tab-item>
        <v-tab-item class="tw-h-full">
          <div class="tw-flex">
            <div
              class="tw-w-1/4 tw-border-r tw-h-full tw-overflow-y-auto tw-shrink-0"
            >
              <v-list dense class="tw-h-full preset__list">
                <v-list-item-group v-model="activePresetIdx" color="primary">
                  <v-list-item
                    v-for="presetName in presetStore.presetList"
                    :key="presetName"
                    @click="tabClickHandler(presetName)"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{ presetName }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>

            <div class="tw-w-3/4 tw-h-full tw-overflow-y-auto tw-p-2">
              <v-window v-model="activePresetIdx" vertical>
                <v-window-item
                  v-for="(presetName, index) in presetStore.presetList"
                  :key="presetName"
                  :value="index"
                  class="tw-h-full"
                >
                  <SettingsTable
                    v-if="Math.abs(activePresetIdx - index) <= 1"
                    v-model="fields"
                    :presetName.sync="presetName"
                    :headers="headers"
                  />
                </v-window-item>
              </v-window>
            </div>
          </div>
        </v-tab-item>
      </v-tabs>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { Header } from "@/shared-ui/src/components/DataTable";
import { Dialog } from "@/shared-ui/src/components/Dialog";
import { SettingsTable } from "@/shared/UI/SettingsTable";
import { useHeaderTable } from "@/widgets/HeaderTable/model/use-header-table";
import { usePresetStore } from "@/entities/preset/model/use-preset-store";
import { ref, watch } from "vue";

interface MessageViewSettingsProps {
  value?: boolean;
}

const props = defineProps<MessageViewSettingsProps>();

const emit = defineEmits<{
  (e: `input`, data: any): void;
}>();

const presetStore = usePresetStore();

const { fields, headers, presetName, save } = useHeaderTable();

const handleSave = (data: { presetName: string; settingsBody: Header[] }) => {
  console.log(data);
};

const tabClickHandler = (data: any) => {
  console.log(data);
};

const tabsChangeHandler = (data: any) => {
  console.log(`@change`, data);
};

const activePresetIdx = ref();
watch(activePresetIdx, () => {
  console.log({ test: activePresetIdx.value });
});
</script>
<style scoped>
:deep(.v-window__container) {
  height: 100%;
}

.preset__list {
  height: 500px;
}
</style>
