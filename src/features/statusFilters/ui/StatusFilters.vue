<template>
  <select-input
    class="tw-mb-6"
    label="Старый статус"
    chips
    multiple
    v-model="selectedOldStatuses"
    :items="statusHistoryOptions"
    @debounce="handleSelectStatus"
  >
    <template #selectedChip="{ item, index }">
      <v-chip
        v-if="index === 1 || index === 0"
        @click:close="handleRemoveOldChip(index)"
        :color="getColor(item.label)"
      >
        {{ item.label }}
      </v-chip>
      <span class="tw-text-xs" v-if="index === 2"
        >(+{{ selectedOldStatuses.length - 2 }} выбрано)</span
      >
    </template>
  </select-input>
</template>
<script lang="ts" setup>
import SelectInput from "@/shared/UI/SelectInput/SelectInput.vue";
</script>
