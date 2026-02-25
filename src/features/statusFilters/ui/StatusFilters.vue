<template>
  <div class="tw-flex tw-gap-3 tw-px-2">
    <div class="tw-flex-none tw-w-1/3">
      <select-chips
        label="Старый статус"
        return-object
        placeholder="Старый статус"
        v-model="oldStatuses"
        :items="selectStatusHisotryItems"
      />
    </div>
    <div class="tw-flex-none tw-w-1/3">
      <select-chips
        label="Новый статус"
        placeholder="Новый статус"
        v-model="newStatuses"
        :items="selectStatusHisotryItems"
      />
    </div>
    <div class="tw-flex-none tw-w-1/3">
      <select-chips
        label="Тип пользователя"
        placeholder="Тип пользователя"
        v-model="userTypes"
        :items="selectUserType"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import SelectChips from "@/shared/UI/SelectChips/SelectChips.vue";
import { useStatusFilterModel } from "../model/model";

const {
  selectStatusHisotryItems,
  selectUserType,
  newStatuses,
  userTypes,
  oldStatuses,
} = useStatusFilterModel();
</script>
