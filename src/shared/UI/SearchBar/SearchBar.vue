<template>
  <div class="tw-flex tw-flex-col tw-gap-6">
    <select-input-vue :items="items" @debounce="handleSelect"></select-input-vue>
  </div>
</template>
<script lang="ts">
import { TSortOptions } from "@/shared/types/common/TSortOptions";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import SelectInputVue from "../SelectInput/SelectInput.vue";
import TextInputVue from "../TextInput/TextInput.vue";
import AutocompliteVue from "@/shared/UI/Autocomplite/Autocomplite.vue";

export default Vue.extend({
  components: { SelectInputVue, TextInputVue, AutocompliteVue },
  props: {
    items: {
      type: Array as PropType<TSortOptions[]>,
      default: () => [],
    },
  },
  methods: {
    handleSelect(newValue: TSortOptions) {
      this.$emit(`select-item`, newValue);
    },
  },
});
</script>
