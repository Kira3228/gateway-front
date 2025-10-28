<template>
  <v-hover v-slot="{ hover }" class="tw-m-2">
    <v-sheet rounded="xl" :elevation="hover ? 2 : 1">
      <v-list-item primary>
        <v-list-item-content>
          <p class="tw-text-base">{{ item.fileName }}</p>
          <p class="tw-text-base tw-text-gray-600">
            {{ item.filePath }} | {{ item.fileSizeBytes }} байт
          </p>
          <span class="tw-text-sm tw-mt-4">
            {{ item.description }}
          </span>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-sheet>
  </v-hover>
</template>

<script lang="ts">
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
export default Vue.extend({
  props: {
    item: {
      type: Object as PropType<TMessageFile>,
      default: {},
    },
  },
});
</script>
