<template>
  <div>
    <v-textarea
      v-if="textarea"
      :value="value"
      filled
      auto-grow
      :label="label"
      @input="handleInput"
    >
    </v-textarea>
    <v-text-field
      v-else
      rounded
      dense
      :label="label"
      :placeholder="placeholder"
      :value="value"
      color="primary"
      solo
      @input="handleInput"
    >
      <template v-if="isSearch" v-slot:append>
        <v-btn icon dark color="primary" @click.stop="">
          <span class="material-icons"> search </span>
        </v-btn>
      </template>
    </v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: `TextInput`,
  props: {
    isSearch: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  created() {},
  methods: {
    handleInput(newValue: string) {
      this.$emit(`input`, newValue);
    },
  },
  beforeDestroy() {},
});
</script>
