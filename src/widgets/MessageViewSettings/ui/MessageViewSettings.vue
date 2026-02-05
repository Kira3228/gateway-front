<template>
  <Dialog :value="true" title="Настройки представления">
    <template #content>
      <HeaderTable />
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { Dialog } from "@/shared-ui/src/components/Dialog";
import HeaderTable from "@/widgets/HeaderTable/ui/HeaderTable.vue";
</script>
