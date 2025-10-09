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
      dense
      :label="label"
      :placeholder="placeholder"
      :value="value"
      color="primary"
      solo
      @input="handleInput"
      :type="inputType"
      :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append="toggleShowPassword"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: `TextInput`,
  props: {
    password: {
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
      showPassword: this.password,
    };
  },
  created() {
    // this.debounce = useDebounce();
    console.log(this.showPassword);
  },
  computed: {
    inputType(): `password` | `text` {
      return this.showPassword ? `password` : `text`;
    },
  },
  mounted() {},
  methods: {
    handleInput(newValue: string) {
      this.$emit(`input`, newValue);
      //   if (this.debounce) {
      //     this.debounce.debounce(() => {
      //       this.$emit("debounce", newValue);
      //     }, 500);
      //   }
      // },
    },
    beforeDestroy() {
      // if (this.debounce) {
      //   this.debounce.destroy();
      // }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>