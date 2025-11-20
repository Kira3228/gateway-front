<template>
  <div class="tw-items-center">
    <text-input-vue label="Поиск" isSearch></text-input-vue>
    <div class="tw-flex tw-gap-2">
      <button-group-vue
        @click-sort="handleClickButton"
        :height="height"
        :items="sortButtonsItems"
      ></button-group-vue>
      <button-vue :height="30" outlined :elevation="0">сбросить</button-vue>
    </div>
    <slot name="ui-item"></slot>
  </div>
</template>
<script lang="ts">
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import ButtonVue from "../Button/Button.vue";
import ButtonGroupVue from "../ButtonGroup/ButtonGroup.vue";
import TextInputVue from "../TextInput/TextInput.vue";
export default Vue.extend({
  name: "SortPanellayout",
  components: {
    TextInputVue,
    ButtonGroupVue,
    ButtonVue,
  },
  data() {
    return {
      model: [],
      isActive: false,
    };
  },
  props: {
    sortButtonsItems: {
      type: Array as PropType<TButtonGroupItem[][]>,
      default: () => [],
    },
    height: {
      type: Number,
      default: 30,
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClickButton(
      childEventData: TButtonGroupItem & { isActive: boolean }
    ) {
      this.$emit(`sort-button-click`, childEventData);
    },
    handleSort(key: boolean, enabled: boolean) {
      if (enabled) {
        console.log(`Sorting enabled for ${key}`);
      } else {
        console.log(`Sorting disabled for ${key}`);
      }
    },
  },
  watch: {
    value(newVal: any[], oldVal: any[]) {
      const old = oldVal || [];

      const added = newVal.filter((x) => !old.includes(x));
      const removed = old.filter((x) => !newVal.includes(x));

      if (added.length) {
        this.handleSort(added[0], true); // включен
      }
      if (removed.length) {
        this.handleSort(removed[0], false); // отключен
      }
    },
  },
});
</script>
