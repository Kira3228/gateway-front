<template>
  <div class="tw-flex tw-gap-2">
    <v-btn-toggle v-for="group in items" :key="group[0].key">
      <button-vue
        v-for="btn in group"
        @click="handleClick($event, btn)"
        :key="btn.key"
        :height="height"
        outlined
        :elevation="0"
        :isActive="isActive"
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

interface IButtonGroupData {
  isActive: boolean;
}

interface IButtonGroupMethods {
  handleClick(childEventData: { isActive: boolean }, btnData: any): void;
}

interface IButtonGroupProps {
  height: number;
  items: TButtonGroupItem[][];
}

export default Vue.extend<
  IButtonGroupData,
  IButtonGroupMethods,
  unknown,
  IButtonGroupProps
>({
  name: "ButtonGroup",
  data() {
    return {
      isActive: true,
    };
  },
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
    handleClick(
      childEventData: { isActive: boolean },
      btnData: TButtonGroupItem
    ) {
      this.isActive = !childEventData.isActive;
      const payload = {
        ...childEventData,
        ...btnData,
      };
      this.$emit(`click-sort`, payload);
    },
  },
});
</script>
