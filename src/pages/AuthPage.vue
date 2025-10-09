<template>
  <v-container>
    <text-input-vue label="Логин"></text-input-vue>
    <text-input-vue label="Логин"></text-input-vue>
    <text-input-vue password label="Пароль"></text-input-vue>
    <button-vue title="Зарегистрироваться"></button-vue>
  </v-container>
</template>
<script lang="ts">
import TextInputVue from "@/shared/UI/TextInput/TextInput.vue";
import ButtonVue from "@/shared/UI/Button/Button.vue";
export default {
  name: `AuthPage`,
  components: {
    TextInputVue,
    ButtonVue,
  },
};
</script>