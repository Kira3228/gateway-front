<template>
  <div class="tw-flex tw-h-screen">
    <menu-vue></menu-vue>
    <div class="tw-flex tw-flex-col tw-min-w-full">
      <!-- <text-input-vue
        placeholder="Поиск"
        isSearch
        class="tw-w-1/3"
      ></text-input-vue> -->
      <v-divider></v-divider>
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
      <v-divider></v-divider>
      <div class="tw-flex-1">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MenuVue from "@/shared/UI/Menu/Menu.vue";
import Vue from "vue";
import TextInputVue from "@/shared/UI/TextInput/TextInput.vue";

export default Vue.extend({
  components: { MenuVue, TextInputVue },
  computed: {
    breadcrumbs() {
      return this.$route.matched
        .filter((route) => route.meta && route.meta.breadcrumb)
        .map((route, index, arr) => ({
          text: route.meta.breadcrumb,
          href: route.path,
          disabled: index === arr.length - 1,
          exact: true,
        }));
    },
  },
});
</script>
