<template>
  <div class="tw-w-40">
    <v-menu bottom :offset-x="offset">
      <template v-slot:activator="{ on, attrs }">
        <v-btn elevation="0" block v-bind="attrs" v-on="on">DASH</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-btn></v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: `Menu2`,
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    offset: true,
  }),
});
</script>


