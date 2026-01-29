<template>
  <div>
    <v-navigation-drawer permanent>
      <v-list>
        <div v-for="(item, idx) in items" :key="item.title">
          <v-menu
            offset-x
            :close-on-content-click="false"
            transition="slide-x-transition"
            open-on-hover
            bottom
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item
                v-bind="attrs"
                v-on="on"
                link
                :to="item.to"
                @click="handleMenuClick(item.to, item.title)"
              >
                <v-list-item-icon>
                  <span class="material-icons">{{ item.icon }}</span>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list v-if="item.subMenu && item.subMenu.length" dense>
              <v-list-item
                v-for="(sub, index) in item.subMenu"
                :key="index"
                link
                :to="sub.to"
                @click="handleMenuClick(sub.to, sub.title)"
              >
                <v-list-item-icon>
                  <span class="material-icons">{{ sub.icon }}</span>
                </v-list-item-icon>
                <v-list-item-title>{{ sub.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { menuItems } from "./menuItems";
const emit = defineEmits<{
  (e: "menu-click", payload: { to?: string; title?: string }): void;
}>();
const items = ref(menuItems);

const isOpenIndex = ref<number | null>(null);

const menus = ref<boolean[]>(items.value.map(() => false));

const openOnly = (idx: number) => {
  menus.value = menus.value.map((_, i) => i === idx);
  isOpenIndex.value = idx;
};

const onMenuInput = (idx: number) => {
  if (menus.value[idx]) {
    openOnly(idx);
  } else if (isOpenIndex.value === idx) {
    isOpenIndex.value = null;
  }
};

const handleMenuClick = (to?: string, title?: string) => {
  emit("menu-click", { to, title });
};
</script>
