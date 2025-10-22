<template>
  <div>
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item v-for="(item, idx) in items" :key="item.title" link :to="item.to">
          <v-menu
            v-model="menus[idx]"
            open-on-hover
            bottom
            offset-x
            :close-on-click="true"
            @input="onMenuInput(idx)"
            dense
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                v-bind="attrs"
                v-on="{ ...on, mouseenter: () => openOnly(idx) }"
                class="cursor-pointer"
                dense
                @click="handleMenuClick(item.to, item.title)"
              >
                <v-list-item-content>
                  <div class="tw-flex tw-gap-2">
                    <span class="material-icons"> {{ item.icon }} </span>
                    <v-list-item-title dense>{{ item.title }}</v-list-item-title>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list v-if="Array.isArray(item.subMenu) && item.subMenu.length">
              <v-list-item
                @click="handleMenuClick(sub.to, sub.title)"
                dense
                v-for="(sub, index) in item.subMenu"
                :key="index"
                link
                :to="sub.to"
              >
                <div class="tw-flex tw-gap-2">
                  <span class="material-icons"> {{ sub.icon }} </span>
                  <v-list-item-title>{{ sub.title }}</v-list-item-title>
                </div>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { TMenuItem } from "./menu.type";
import { menuItems } from "./menuItems";
export default Vue.extend({
  name: `Menu2`,
  props: {},
  data: () => ({
    items: menuItems,
    isOpenIndex: null as number | null,
    menus: [] as boolean[],
  }),
  created() {
    this.menus = this.items.map(() => false);
  },
  methods: {
    openOnly(idx: number) {
      this.menus = this.menus.map((_, i) => i === idx);
      this.isOpenIndex = idx;
    },
    closeAll() {
      this.menus = this.menus.map(() => false);
      this.isOpenIndex = null;
    },
    onMenuInput(idx: number) {
      if (this.menus[idx]) {
        this.openOnly(idx);
      } else if (this.isOpenIndex === idx) {
        this.isOpenIndex = null;
      }
    },
    handleMenuClick(to?: string, title?: string) {
      this.$emit(`menu-click`, { to, title });
    },
  },
});
</script>
