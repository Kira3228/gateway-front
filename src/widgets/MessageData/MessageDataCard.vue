<template>
  <v-card :width="width" class="left-card">
    <v-card-title>Метаданные</v-card-title>
    <div class="tw-max-w-xs">
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="t-textw-lg">ID: {{ messageData.id }}</p>
      </div>
      <v-divider></v-divider>
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Контрольная сумма:</p>
        <p class="tw-text-xs tw-break-all wrap-text">
          {{ messageData.checksum }}
        </p>
      </div>
      <v-divider></v-divider>

      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Создано:</p>
        <p class="tw-text-lg">{{ messageData.createdAt }}</p>
      </div>
      <v-divider></v-divider>

      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Доставлено: {{ messageData.delivered_at }}</p>
      </div>
      <v-divider></v-divider>
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Метаданные: {{ messageData.metadata }}</p>
      </div>
      <v-divider></v-divider>
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Прочитано: {{ messageData.read_at }}</p>
      </div>
      <v-divider></v-divider>
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Получено: {{ messageData.received_at }}</p>
      </div>
      <v-divider></v-divider>
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Получение: {{ messageData.receiving_at }}</p>
      </div>
      <v-divider></v-divider>
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Отправка: {{ messageData.sending_at }}</p>
      </div>
      <v-divider></v-divider>
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Отправлено: {{ messageData.sent_at }}</p>
      </div>
      <v-divider></v-divider>
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Количесво файлов: {{ messageData.totalFilesCount }}</p>
      </div>
      <v-divider></v-divider>
      <div class="tw-flex tw-gap-3 tw-ml-4">
        <p class="tw-text-lg">Размер: {{ messageData.totalSizeBytes }} байт</p>
      </div>
      <v-divider></v-divider>
    </div>
  </v-card>
</template>
<script lang="ts">
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
export default Vue.extend({
  name: `MessageDataCard`,
  props: {
    messageData: { type: Object as PropType<TMessageExt>, default: {} },
    width: {
      type: String,
      default: ``,
    },
  },
});
</script>
