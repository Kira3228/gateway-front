<template>
  <div id="app">
    <v-app>
      <!-- <router-view></router-view> -->
      <auth-page></auth-page>
    </v-app>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AuthPage from "./pages/AuthPage.vue";
export default {
  components: {
    AuthPage,
  },
};
</script>>
</script>

