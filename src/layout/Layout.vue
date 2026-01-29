<template>
  <div class="tw-flex tw-h-screen">
    <Menu></Menu>
    <div class="tw-flex tw-flex-col tw-flex-1">
      <v-divider />
      <breadcrumbs />
      <v-divider />
      <div class="tw-flex-1 tw-overflow-hidden tw-relative">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Menu from "@/shared/UI/Menu/Menu.vue";
import Breadcrumbs from "@/widgets/Breadcrumbs/ui/Breadcrumbs.vue";
</script>
