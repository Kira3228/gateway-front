<template>
  <div>
    <v-textarea
      v-if="isTextarea"
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

<script lang="ts" setup>
interface IProps {
  isSearch: boolean;
  label: string;
  placeholder: string;
  value: string | number;
  isTextarea: boolean;
}
const props = defineProps<IProps>();

const emit = defineEmits<{ (e: `input`): void }>();
const handleInput = () => {
  emit(`input`);
};
</script>
