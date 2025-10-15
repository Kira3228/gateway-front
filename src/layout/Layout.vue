<template>
  <div class="tw-flex">
    <menu-vue @menu-click="handleMenuItemClick"></menu-vue>
    <v-breadcrumbs></v-breadcrumbs>
    adsfasdfasfdasdf
  </div>
</template>

  <script lang="ts">
import MenuVue from "@/shared/UI/Menu/Menu2.vue";
import Vue from "vue";
export default Vue.extend({
  name: `Layout`,
  components: { MenuVue },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    handleMenuItemClick(route: string) {
      this.$store.commit(`breadcrumbsStore/SET_BREADCRUMBS`, route);
      console.log(`Роут ${route}`);
    },
  },
});
</script>
</template>
