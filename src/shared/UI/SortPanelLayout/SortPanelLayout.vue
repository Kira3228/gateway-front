<template>
  <div class="tw-items-center">
    <text-input-vue label="Поиск" isSearch></text-input-vue>
    <button-group-vue :height="height" :items="sortButtonsItems"></button-group-vue>
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
  components: {
    TextInputVue,
    ButtonGroupVue,
  },
  props: {
    sortButtonsItems: {
      type: Array as PropType<TButtonGroupItem[]>,
      default: () => [],
    },
    height: {
      type: Number,
      default: 30,
    },
  },
  methods: {
    handleClickButton() {
      this.$emit(``);
    },
  },
});
</script>
