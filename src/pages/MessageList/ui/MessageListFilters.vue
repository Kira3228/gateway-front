<template>
  <div class="tw-flex tw-justify-between tw-p-2">
    <div class="tw-flex tw-flex-1 tw-gap-5">
      <UiSelect :items="[`asdas`]" />
      <UiSelect />
      <UiSelect />
      <UiSelect />
      <UiSelect />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UiSelect } from "@/shared-ui/src/components/Select";

import { Button } from "@/shared-ui/src/components/Button";
import { MoreIcon } from "@/shared-ui/src/components/Icons";
</script>
