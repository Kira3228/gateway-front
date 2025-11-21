<template>
  <div>
    <v-checkbox v-model="localValue" @change="handleClick" :label="label"></v-checkbox>
  </div>
</template>

<script lang="ts">
import { useDebounce } from "@/shared/lib/debounce";
import Vue from "vue";
export default Vue.extend({
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.debounce = useDebounce();
  },
  data() {
    return {
      debounce: null as ReturnType<typeof useDebounce> | null,
      localValue: this.value,
    };
  },
  methods: {
    handleClick(newValue: boolean) {
      this.$emit("input", newValue);
      if (this.debounce) {
        this.debounce.debounce(() => {
          this.$emit(`debounce`, newValue);
        });
      }
    },
  },
});
</script>
