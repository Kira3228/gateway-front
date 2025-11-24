<template>
  <div>
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item
          v-for="(item, idx) in items"
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
                    <v-list-item-title dense>{{
                      item.title
                    }}</v-list-item-title>
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
