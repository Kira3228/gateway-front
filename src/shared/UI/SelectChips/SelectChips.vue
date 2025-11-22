<template>
  <select-input
    class="tw-mb-6"
    label="Старый статус"
    placeholder="Старый статус"
    multiple
    item-text="label"
    :chips="true"
    itemValue="value"
    :customList="false"
    :items="items"
    return-object
    @debounce="handleDebounce"
    :value="value"
    @input="handleInput"
  >
    <template #selectedChip="{ item, index }">
      <v-chip
        v-if="index < 2"
        close
        @click:close="handleRemoveChip(item)"
        :color="getStatusColor(item.label)"
        small
      >
        {{ item.label }}
      </v-chip>
      <span class="tw-text-xs tw-text-gray-500" v-if="index === 2">
        (+{{ (value?.length || 0) - 2 }} выбрано)
      </span>
    </template>
  </select-input>
</template>
<script lang="ts" setup generic="T">
import SelectInput from "../SelectInput/SelectInput.vue";
import { TOption } from "../SelectInput/TOptions";

interface IProps {
  items: TOption[];
  value?: TOption[];
}

const props = defineProps<IProps>();

const emit = defineEmits<{
  (e: `debounced-call`): void;
  (e: `input`, value: any): void;
}>();

const handleDebounce = () => {
  emit(`debounced-call`);
};

const handleInput = (data: any) => {
  emit(`input`, data);
};

const handleRemoveChip = (itemToRemove: TOption) => {
  const currentItems = props.value || [];

  // Фильтруем
  const newItems = currentItems.filter((i) => i.value !== itemToRemove.value);

  emit("input", newItems);
  handleDebounce();
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case `создано`:
      return `#007bff`;
    case `принимается`:
      return "#17a2b8";
    case `принято`:
      return "#28a745";
    case `обработано`:
      return "#ffc107";
    case `отправляется`:
      return "#17a2b8";
    case `отправлено`:
      return "#007bff";
    case `доставлено`:
      return "#28a745";
    case `прочитано`:
      return "#6f42c1";
    default:
      return `#dc3545`;
  }
};
</script>
