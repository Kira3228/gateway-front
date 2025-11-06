<template>
  <v-hover v-slot="{ hover }" class="tw-m-2 tw-block">
    <v-sheet rounded="xl" :elevation="hover ? 2 : 1">
      <v-list-item primary>
        <v-list-item-content>
          <slot name="content" :item="item"></slot>
        </v-list-item-content>
        <v-list-item-action>
          <slot name="action"></slot>
        </v-list-item-action>
      </v-list-item>
    </v-sheet>
  </v-hover>
</template>

<script lang="ts">
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import { TStatusHistory } from "@/shared/types/common/TStatusHistory";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
export default Vue.extend({
  props: {
    item: {
      type: Object as PropType<TMessageFile & TStatusHistory>,
      default: () => {},
    },
  },
});
</script>
