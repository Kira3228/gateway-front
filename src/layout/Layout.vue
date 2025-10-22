<template>
  <div class="tw-flex">
    <menu-vue></menu-vue>
    <div class="tw-flex tw-flex-col tw-min-w-full">
      <text-input-vue placeholder="Поиск" isSearch class="tw-w-1/3"></text-input-vue>
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
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import MenuVue from "@/shared/UI/Menu/Menu2.vue";
import { TBreadcrumbs } from "@/store/breadcrumbs/breadcrumbs.store";
import Vue from "vue";
import TextInputVue from "@/shared/UI/TextInput/TextInput.vue";

export default Vue.extend({
  name: `Layout`,
  components: { MenuVue, TextInputVue },
  data() {
    return {
      fullPath: this.$route.fullPath as string,
    };
  },
  computed: {
    items(): TBreadcrumbs[] {
      return this.$store.state.breadcrumbsStore.breadcrumbs;
    },
    test(): string {
      return this.$route.fullPath;
    },
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

  methods: {
    handleMenuItemClick(payload: { to: string; title: string }) {
      const { to, title } = payload;
      if (to && title) {
        this.$store.commit(`breadcrumbsStore/SET_BREADCRUMBS`, {
          title: title,
          disabled: false,
          to: to,
          text: title,
        });
      }
    },
    handleBreadcrumbClick(item: TBreadcrumbs) {
      const index = this.items.findIndex((b: TBreadcrumbs) => b.to === item.to);
      if (index !== -1) {
        this.$store.commit(`breadcrumbsStore/REMOVE_FROM_INDEX`, index);
      }
    },
    routerHandler() {},
  },
  watch: {
    test: {
      handler() {
        this.routerHandler();
      },
    },
  },
});
</script>
