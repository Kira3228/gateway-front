<template>
  <div>
    <v-btn-toggle>
      <button-vue
        @click="btn.func ? btn.func.call(btn) : null"
        v-for="btn in items"
        :key="btn.key"
        :height="height"
      >
        <component :is="btn.component"></component>
      </button-vue>
    </v-btn-toggle>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import ButtonVue from "../Button/Button.vue";
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
export default Vue.extend({
  components: {
    ButtonVue,
  },
  props: {
    height: {
      type: Number,
      default: 48,
    },
    items: {
      type: Array as PropType<TButtonGroupItem[]>,
      default: () => [],
    },
  },
});
</script>
