<template>
  <div class="tw-flex">
    <div class="tw-border-r tw-h-full tw-overflow-y-auto tw-shrink-0">
      <v-list dense class="tw-h-full preset__list">
        <v-list-item-group
          v-model="activePresetIndex"
          color="primary"
          @change="handlePresetChange"
        >
          <v-list-item
            v-for="presetName in presetStore.presetList"
            :key="presetName"
          >
            <v-list-item-content>
              <div class="tw-flex tw-gap-2">
                <v-list-item-title>{{ presetName }}</v-list-item-title>
                <Button
                  :class="
                    presetName === `standart`
                      ? `tw-cursor-not-allowed`
                      : 'tw-cursor-pointer'
                  "
                  :disabled="presetName === `standart`"
                  width="20"
                  @click.stop="handleDeletePreset(presetName)"
                  icon
                >
                  <DeleteIcon
                    :color="presetName === `standart` ? `#757575` : '#000000'"
                  />
                </Button>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>

    <div class="tw-h-full tw-overflow-y-auto tw-p-2">
      <SettingsTable
        :headers="headers"
        v-model="presetStore.presetForSettings"
        :preset-name.sync="presetStore.selectedPresetName"
      >
        <template #footer>
          <div
            class="tw-flex tw-justify-between tw-items-center tw-gap-1 tw-mt-2 tw-m-3"
          >
            <Button
              @click="handleUpdatePreset()"
              outlined
              height="32"
              color="blue"
            >
              <div class="tw-flex tw-items-center tw-gap-1">
                <SaveIcon color="#2196F3" height="20" />
                <span> Сохранить </span>
              </div>
            </Button>
            <Button outlined height="32" color="red">
              <div class="tw-flex tw-items-center tw-gap-1">
                <CloseIcon height="20" />
                <span>Отмена </span>
              </div>
            </Button>
          </div>
        </template>
      </SettingsTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "@/shared-ui/src/components/Button";
import { DeleteIcon } from "@/shared-ui/src/components/Icons";
import { SettingsTable } from "@/shared/UI/SettingsTable";
import { usePresetList } from "../model/use-preset-list";
import { usePresetStore } from "@/entities/preset/model/use-preset-store";
import { useHeaderTable } from "../model/use-header-table";

const {
  activePresetIndex,
  handlePresetChange,
  handleDeletePreset,
  handleUpdatePreset,
} = usePresetList();

const presetStore = usePresetStore();
const { headers } = useHeaderTable();
</script>
