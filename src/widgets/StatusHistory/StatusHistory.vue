<template>
  <v-sheet width="100%">
    <v-card-title> Итория изменений </v-card-title>
    <virtual-scroll-vue :items="items">
      <template v-slot:item="{ item }">
        <list-item-vue :key="item.id" :item="item">
          <template v-slot:content="{ item }">
            <span class="tw-text-gray-600 tw-text-xs">{{ item.changeDatetime }}</span>
            <div class="tw-flex">
              <v-chip color="red">{{ item.oldStatus }}</v-chip>
              <v-icon>mdi-forward</v-icon>
              <v-chip color="green">{{ item.newStatus }}</v-chip>
            </div>
            <p>Причина {{ item.reason }}</p>
            <p>{{ item.metadata }}</p>
            <list-item-vue>
              <template v-slot:content>
                <div class="tw-flex tw-items-end tw-gap-4">
                  <v-badge :color="getColor(item.user.isActive)" overlap>
                    <v-avatar color="grey" size="48">
                      <span class="white--text text-h7">{{ item.user.userType }}</span>
                    </v-avatar>
                  </v-badge>
                  <p>{{ item.user.fullName }}</p>
                </div>
              </template>
            </list-item-vue>

            <p></p>
          </template>
        </list-item-vue>
      </template>
    </virtual-scroll-vue>
  </v-sheet>
</template>
<script lang="ts">
import { TStatusHistory } from "@/shared/types/common/TStatusHistory";
import Vue from "vue";
import { Prop, PropType } from "vue/types/v3-component-props";
import VirtualScrollVue from "@/shared/UI/VirtualScroll/VirtualScroll.vue";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
export default Vue.extend({
  components: { VirtualScrollVue, ListItemVue },
  props: {
    items: {
      type: Array as PropType<TStatusHistory[]>,
      default: () => {},
    },
  },
  methods: {
    getColor(isActive: boolean): `green` | `red` {
      return isActive ? `green` : `red`;
    },
  },
});
</script>
