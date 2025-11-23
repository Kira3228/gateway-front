<template>
  <div>
    <select-chips v-model="oldStatuses" :items="selectStatusHisotryItems" />
    <select-chips v-model="newStatuses" :items="selectStatusHisotryItems" />
  </div>
</template>
<script lang="ts" setup>
import SelectChips from "@/shared/UI/SelectChips/SelectChips.vue";
import { useStatusFilterModel } from "../model/model";

const { selectStatusHisotryItems, newStatuses, oldStatuses } =
  useStatusFilterModel();
</script>
