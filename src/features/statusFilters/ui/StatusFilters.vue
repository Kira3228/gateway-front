<template>
  <div>
    <select-chips
      label="Старый статус"
      return-object
      placeholder="Старый статус"
      v-model="oldStatuses"
      :items="selectStatusHisotryItems"
    />
    <select-chips
      label="Новый статус"
      placeholder="Новый статус"
      v-model="newStatuses"
      :items="selectStatusHisotryItems"
    />
    <!-- <select-chips
      label="Тип пользователя"
      placeholder="Тип пользователя"
      v-model="userTypes"
      :items="selectUserType"
    /> -->
  </div>
</template>
<script lang="ts" setup>
import SelectChips from "@/shared/UI/SelectChips/SelectChips.vue";
import { useStatusFilterModel } from "../model/model";
import { TOption } from "@/shared/UI/SelectInput/TOptions";

const {
  selectStatusHisotryItems,
  selectUserType,
  newStatuses,
  userTypes,
  oldStatuses,
} = useStatusFilterModel();
</script>
