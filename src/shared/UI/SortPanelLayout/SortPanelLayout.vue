<template>
  <div class="tw-items-center">
    <text-input-vue label="Поиск" isSearch></text-input-vue>
    <button-group-vue
      @click-sort="handleClickButton"
      :height="height"
      :items="sortButtonsItems"
    ></button-group-vue>
    <slot name="ui-item"></slot>
  </div>
</template>
<script lang="ts">
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import ButtonGroupVue from "../ButtonGroup/ButtonGroup.vue";
import TextInputVue from "../TextInput/TextInput.vue";
export default Vue.extend({
  name: "SortPanellayout",
  data() {
    return {
      model: [],
      isActive: false,
    };
  },
  components: {
    TextInputVue,
    ButtonGroupVue,
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
    handleClickButton(childEventData: TButtonGroupItem & { isActive: boolean }) {
      this.$emit(`sort-button-click`, childEventData);
    },
    handleSort(key: boolean, enabled: boolean) {
      if (enabled) {
      } else {
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
