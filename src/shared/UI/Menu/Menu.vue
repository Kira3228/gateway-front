<template>
  <div class="tw-flex">
    <v-list class="tw-w-56 tw-min-w-[224px] tw-h-full" nav dense>
      <div class="tw-flex tw-flex-col tw-justify-between tw-h-full">
        <div>
          <v-list-item
            color="primary"
            v-for="item in menuItems"
            :key="item.route"
            :to="item.route"
            link
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </div>
      </div>
    </v-list>
    <v-main class="tw-flex-1">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script lang="ts">
export default {
  name: "Menu",
  components: {},
  data() {
    return {
      menuItems: [
        {
          title: `Список сообщений`,
          route: "/",
        },
        {
          title: `1`,
          route: "/1",
        },
        {
          title: `2`,
          route: "/2",
        },
      ],
    };
  },
};
</script>