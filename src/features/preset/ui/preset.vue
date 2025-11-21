<template>
  <select-input-vue
    :items="presetList"
    v-model="selectedPreset"
    placeholder="Режим отображения"
    @debounce="handleSelectChange"
  ></select-input-vue>
</template>
<script lang="ts">
import SelectInputVue from "@/shared/UI/SelectInput/SelectInput.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    SelectInputVue,
  },
  computed: {
    presetList() {},
    selectedPreset() {},
  },
  methods: {
    async handleSelectChange() {
      await this.$store.dispatch(`messageStore/getHeaders`);
    },
  },
});
</script>
