<template>
  <v-select
    :label="label"
    :placeholder="placeholder"
    :items="items"
    :value="value"
    :hide-details="true"
    item-text="label"
    :item-value="itemValue"
    standart
    :return-object="returnObject"
    dense
    single-line
    color="primary"
    style="width: 360px"
    @input="handleSelect"
    :chips="chips"
    :multiple="multiple"
  >
    <template v-slot:selection="{ item, index }">
      <slot name="selectedChip" :item="item" :index="index"></slot>
    </template>
    <template v-if="customList" v-slot:item="{ item, on, attrs }">
      <slot :item="item" :on="on" :attrs="attrs" name="ui-item">
        <v-list-item v-bind="attrs" v-on="on">
          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </slot>
    </template>
  </v-select>
</template>

<script lang="ts">
import { TSortOptions } from "@/shared/types/common/TSortOptions";
import Vue from "vue";
import { useDebounce } from "../../lib/debounce";
export default Vue.extend({
  name: "CustomSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    items: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "Выберите опцию",
    },
    value: {
      type: [String, Number, Object, Array],
      default: null,
    },
    chips: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    customList: {
      type: Boolean,
      default: false,
    },
    returnObject: { type: Boolean, default: false },
    itemValue: {
      type: String,
      default: "",
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
    handleSelect(newValue: TSortOptions) {
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
