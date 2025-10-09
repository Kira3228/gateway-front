<template>
  <div class="tw-flex">
    <v-list class="tw-w-56 tw-min-w-[224px] tw-h-full" nav dense>
      <div class="tw-flex tw-flex-col tw-justify-between tw-h-full">
        <div>
          <v-list-item color="primary">
            <v-list-item-title>{{}}</v-list-item-title>
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
  name: "MainMenu",
  components: {},
  data() {
    return {
      menuItems: [],
    };
  },
};
</script>