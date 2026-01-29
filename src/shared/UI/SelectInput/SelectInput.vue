<template>
  <v-select
    :label="label"
    :placeholder="placeholder"
    :items="items"
    :hide-details="true"
    :item-text="itemText"
    :item-value="itemValue"
    standart
    :return-object="returnObject"
    dense
    single-line
    color="primary"
    :multiple="multiple"
    deletable-chips
    @input="handleSelect"
    :value="value"
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

<script lang="ts" setup generic="T, H">
import { TSortOptions } from "@/shared/types/common/TSortOptions";
import { useDebounce } from "../../lib/debounce";
interface IProps {
  label?: string;
  items: T[];
  placeholder: string;
  value?: H;
  chips: boolean;
  multiple: boolean;
  customList: boolean;
  returnObject: boolean;
  itemValue: string;
  itemText: string;
}

withDefaults(defineProps<IProps>(), {
  chips: false,
  customList: false,
});
const emits = defineEmits<{
  (e: `debounce`, value: any): void;
  (e: `input`, value: any): void;
}>();

const debounce = useDebounce();

const handleSelect = (newValue: TSortOptions) => {
  emits("input", newValue);
  if (debounce && debounce.debounce) {
    debounce.debounce(() => {
      emits(`debounce`, newValue);
    });
  }
};
</script>
