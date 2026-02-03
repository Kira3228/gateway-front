<template>
  <div class="tw-h-screen tw-flex tw-relative">
    <Menu />
    <div class="tw-flex tw-flex-col tw-flex-1">
      <v-divider />
      <breadcrumbs />
      <v-divider />
      <div
        class="tw-p-4 tw-flex-1 tw-min-w-0 tw-overflow-hidden tw-flex tw-flex-col"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Menu from "@/shared/UI/Menu/Menu.vue";
import Breadcrumbs from "@/widgets/Breadcrumbs/ui/Breadcrumbs.vue";
import { RouterView } from "vue-router";
</script>
