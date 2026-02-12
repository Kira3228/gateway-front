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
                  width="20"
                  @click.stop="handleDeletePreset(presetName)"
                  icon
                >
                  <DeleteIcon />
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
      />
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

const { activePresetIndex, handlePresetChange, handleDeletePreset } =
  usePresetList();

const presetStore = usePresetStore();
const { headers } = useHeaderTable();
</script>
