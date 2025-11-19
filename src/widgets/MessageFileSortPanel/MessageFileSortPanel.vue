<template>
  <div>
    <sort-panel-layout-vue></sort-panel-layout-vue>
  </div>
</template>
<script lang="ts">
import SortPanelLayoutVue from "@/shared/UI/SortPanelLayout/SortPanelLayout.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    SortPanelLayoutVue,
  },
  props: {},
  data() {
    return {};
  },
});
</script>
