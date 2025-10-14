<template>
  <div class="tw-text-center">
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item
          v-for="(item, idx) in menuItems"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-menu
            v-model="menus[idx]"
            open-on-hover
            bottom
            offset-x
            :close-on-click="true"
            @input="onMenuInput(idx)"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                v-bind="attrs"
                v-on="{ ...on, mouseenter: () => openOnly(idx) }"
                class="cursor-pointer"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list v-if="Array.isArray(item.subMenu) && item.subMenu.length">
              <v-list-item
                v-for="(sub, index) in item.subMenu"
                :key="index"
                link
                :to="sub.to"
              >
                <v-list-item-title>{{ sub.title }}</v-list-item-title>
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
export default Vue.extend({
  name: `Menu2`,
  props: {
    menuItems: {
      type: Array as PropType<TMenuItem[]>,
      default: [],
    },
  },
  data: () => ({
    items: [
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        to: `/test`,
        subMenu: [
          { title: `text`, to: `/test` },
          { title: `text` },
          { title: `text` },
          { title: `text` },
          { title: `text` },
          { title: `text` },
        ],
      },
      {
        title: "Dashboard2",
        icon: "mdi-view-dashboard",
        to: `/test2`,
        subMenu: [
          { title: `text` },
          { title: `text` },
          { title: `text` },
          { title: `asdasdsadsa` },
          { title: `text` },
          { title: `text` },
        ],
      },
    ],
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
  },
});
</script>


