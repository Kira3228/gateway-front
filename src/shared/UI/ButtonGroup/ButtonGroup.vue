<template>
  <div class="tw-flex tw-gap-2">
    <v-btn-toggle v-for="group in items" :key="group[0].key">
      <button-vue
        @click="handleClick(btn)"
        v-for="btn in group"
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
      type: Array as PropType<TButtonGroupItem[][]>,
      default: () => [],
    },
  },
  methods: {
    handleClick(data: any) {
      this.$emit(`sort-click`, data);
    },
  },
});
</script>
