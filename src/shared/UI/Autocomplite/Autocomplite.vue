<template>
  <v-autocomplete
    v-model="model"
    :items="items"
    :loading="isLoading"
    :search-input.sync="search"
    chips
    clearable
    hide-details
    hide-selected
    item-text="fileName"
    item-value="id"
    label="Search for a coin..."
    solo
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-title>
          Search for your favorite
          <strong>Cryptocurrency</strong>
        </v-list-item-title>
      </v-list-item>
    </template>
    <template v-slot:selection="{ attr, on, item, selected }">
      <v-chip
        v-bind="attr"
        :input-value="selected"
        color="blue-grey"
        class="white--text"
        v-on="on"
      >
        <span v-text="item.fileName"></span>
      </v-chip>
    </template>
    <template v-slot:item="{ item }">
      <v-list-item-avatar color="indigo" class="text-h5 font-weight-light white--text">
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ item.fileName }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-icon>mdi-bitcoin</v-icon>
      </v-list-item-action>
    </template>
  </v-autocomplete>
</template>

<script lang="ts">
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";

export default Vue.extend({
  props: {
    // items: { type: Array as PropType<TMessageFile[]>, default: () => [] },
    search: { type: [String, null as any], default: null },
  },
  data: () => ({
    isLoading: false,
    items: [] as TMessageFile[],
    model: null,
    // search: null,
    tab: null,
  }),

  watch: {
    model(val) {
      if (val != null) this.tab = null;
      else this.tab = null;
    },
    search(val: string) {
      if (this.items.length > 0) {
        return;
      }
      this.isLoading = true;
      fetch("http://localhost:3000/messages/files/1")
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = Array.isArray(res)
            ? res.filter((item) => item && typeof item.fileName === "string")
            : [];
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
});
</script>
