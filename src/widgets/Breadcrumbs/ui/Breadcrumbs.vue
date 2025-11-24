<template>
  <v-breadcrumbs :items="breadcrumbs" divider="/">
    <template v-slot:divider>
      <v-icon>mdi-forward</v-icon>
    </template>
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :exact="item.exact"
        :to="item.href"
        :disabled="item.disabled"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router/composables";

const route = useRoute();
const breadcrumbs = computed(() => {
  return route.matched
    .filter((r) => r.meta && r.meta.breadcrumb)
    .map((r, i, arr) => ({
      text: r.meta.breadcrumb,
      href: r.path,
      disabled: i === arr.length - 1,
      exact: true,
    }));
});
</script>
