<template>
  <v-select
    :label="label"
    :placeholder="placeholder"
    :items="items"
    :value="selectedValue"
    :hide-details="true"
    item-text="label"
    item-value="value"
    standart
    dense
    single-line
    color="primary"
    style="max-width: 200px"
    @input="handleSelect"
  ></v-select>
</template>

<script lang="ts">
import Vue from "vue";
import { use } from "vue/types/umd";
import { useDebounce } from "./../../utils/debounce";
export default Vue.extend({
  name: "CustomSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: (): [] | string[] => [],
    },
    placeholder: {
      type: String,
      default: "Выберите опцию",
    },
    value: {
      type: [String, Number, Object, Array],
      default: null,
    },
  },

  data() {
    return {
      selectedValue: this.value,
      debounce: null as ReturnType<typeof useDebounce> | null,
    };
  },
  created() {
    this.debounce = useDebounce();
  },
  methods: {
    handleSelect(newValue: string) {
      this.$emit("input", newValue);
      if (this.debounce) {
        this.debounce.debounce(() => {
          this.$emit(`debounce`, newValue);
        });
      }
    },
  },
  watch: {},
});
</script>
