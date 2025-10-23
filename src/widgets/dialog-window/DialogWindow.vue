<template>
  <v-dialog
    fullscreen
    @click:outside="handleCloseClick"
    v-model="value"
    max-width="500px"
  >
    <v-card>
      <div class="tw-flex">
        <div class="tw-max-w-xs">
          <v-card-title>Детали строки</v-card-title>
          <v-card-text> ID: {{ messageData.id }}</v-card-text>
          <v-card-text class="tw-flex-col">
            Контрольная сумма: {{ messageData.checksum }}</v-card-text
          >
          <v-card-text> Создано: {{ messageData.createdAt }}</v-card-text>
          <v-card-text> Доставлено: {{ messageData.delivered_at }}</v-card-text>
          <v-card-text> Метаданные: {{ messageData.metadata }}</v-card-text>
          <v-card-text> Прочитано: {{ messageData.read_at }}</v-card-text>
          <v-card-text>Получено: {{ messageData.received_at }}</v-card-text>
          <v-card-text>Получение: {{ messageData.receiving_at }}</v-card-text>
          <v-card-text>Отправка: {{ messageData.sending_at }}</v-card-text>
          <v-card-text>Отправлено: {{ messageData.sent_at }}</v-card-text>
          <v-card-text>Количесво файлов: {{ messageData.totalFilesCount }}</v-card-text>
          <v-card-text>Размер: {{ messageData.totalSizeBytes }} байт</v-card-text>
        </div>
        <v-virtual-scroll>
          <template v-slot:default="{ item }">
            <v-list-item :key="item"></v-list-item>
          </template>
        </v-virtual-scroll>
      </div>

      <v-card-actions>
        <v-btn color="primary" text @click="handleCloseClick">Закрыть</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";

export default Vue.extend({
  name: `DialogWindow`,
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    messageData: {
      type: Object as PropType<TMessageExt>,
      default: () => ({
        id: 0,
        createdAt: new Date(0),
        receiving_at: new Date(0),
        received_at: new Date(0),
        sending_at: new Date(0),
        sent_at: new Date(0),
        delivered_at: new Date(0),
        read_at: null,
        totalFilesCount: 0,
        totalSizeBytes: 0,
        checksum: "",
        metadata: "",
      }),
    },
  },

  methods: {
    handleCloseClick() {
      this.$emit("input", false);
      this.$emit(`close-click`, false);
    },
  },
  watch: {
    messageData(val) {},
  },
});
</script>
