<template>
  <Dialog
    :value="value"
    @input="emit('input', $event)"
    title="Настройки представления"
  >
    <template #content>
      <v-tabs vertical>
        <v-tab>Создать пресет</v-tab>
        <v-tab
          >Сохранённые <br />
          пресеты</v-tab
        >
        <v-tab-item>
          <SettingsTable
            v-model="presetStore.newCustomPreset"
            :presetName.sync="presetStore.newCustomPresetName"
            :headers="headers"
            @save="handleSave"
          />
        </v-tab-item>
        <v-tab-item>
          <v-tabs
            @change="tabsChangeHandler"
            v-model="activePresetIdx"
            vertical
          >
            <v-tab
              @click="tabClickHandler(presetName)"
              v-for="presetName in presetStore.presetList"
              :key="presetName"
            >
              {{ presetName }}
            </v-tab>
            <v-tab-item v-for="(n, index) in presetStore.presetList.length">
              <SettingsTable
                v-if="
                  activePresetIdx === index ||
                  index === activePresetIdx + 1 ||
                  index === activePresetIdx - 1
                "
                v-model="fields"
                :presetName.sync="presetName"
                :headers="headers"
              />
            </v-tab-item>
          </v-tabs>
        </v-tab-item>
      </v-tabs>
    </template>
    <template #actions> </template>
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
