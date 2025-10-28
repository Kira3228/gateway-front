<template>
  <v-sheet :width="width" class="left-card">
    <v-card-title>Метаданные</v-card-title>
    <div class="tw-max-w-xs tw-ml-4">
      <sheet-vue>
        <p class="tw-text-lg">ID: {{ messageData.id }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Контрольная сумма:</p>
        <p class="tw-text-xs tw-break-all wrap-text">
          {{ messageData.checksum }}
        </p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Создано:</p>
        <p class="tw-text-lg">{{ messageData.createdAt }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Доставлено: {{ messageData.delivered_at }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Метаданные: {{ messageData.metadata }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Прочитано: {{ messageData.read_at }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Получено: {{ messageData.received_at }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Получение: {{ messageData.receiving_at }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Отправка: {{ messageData.sending_at }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Отправлено: {{ messageData.sent_at }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Количесво файлов: {{ messageData.totalFilesCount }}</p>
      </sheet-vue>
      <sheet-vue>
        <p class="tw-text-lg">Размер: {{ messageData.totalSizeBytes }} байт</p>
      </sheet-vue>
    </div>
  </v-sheet>
</template>
<script lang="ts">
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt";
import SheetVue from "@/shared/UI/Sheet/Sheet.vue";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
export default Vue.extend({
  name: `MessageDataCard`,
  components: {
    SheetVue,
  },
  props: {
    messageData: { type: Object as PropType<TMessageExt>, default: {} },
    width: {
      type: String,
      default: ``,
    },
  },
});
</script>
<style lang="scss" scoped>
.v-application p {
  margin-bottom: 0px;
}
</style>
