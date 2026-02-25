<template>
  <div id="app">
    <v-app>
      <router-view />
      <Toast />
    </v-app>
  </div>
</template>
<script setup lang="ts">
import { Toast } from "./shared-ui/src/components/Toast";
</script>
