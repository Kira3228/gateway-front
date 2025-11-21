<template>
  <v-sheet class="tw-p-3 left-card" :width="width">
    <v-card-title>Метаданные</v-card-title>
    <div class="tw-max-w-xs tw-ml-4 tw-flex tw-flex-col tw-gap-y-2">
      <div class="tw-flex tw-flex-col">
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">ID</p>
        <p class="tw-text-lg">{{ messageData.id }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">
          Контрольная сумма:
        </p>
        <p class="tw-text-lg tw-break-all wrap-text">
          {{ messageData.checksum }}
        </p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Создано:</p>
        <p class="tw-text-lg">{{ messageData.createdAt }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Доставлено</p>
        <p class="tw-text-lg">{{ messageData.delivered_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Метаданные</p>
        <p class="tw-text-lg">{{ messageData.metadata }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Прочитано</p>
        <p class="tw-text-lg">{{ messageData.read_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Получено</p>
        <p class="tw-text-lg">{{ messageData.received_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Получение</p>
        <p class="tw-text-lg">{{ messageData.receiving_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Отправка</p>
        <p class="tw-text-lg">{{ messageData.sending_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Отправлено</p>
        <p class="tw-text-lg">{{ messageData.sent_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Количесво файлов</p>
        <p class="tw-text-lg">{{ messageData.totalFilesCount }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Размер</p>
        <p class="tw-text-lg">{{ messageData.totalSizeBytes }} байт</p>
      </div>
    </div>
  </v-sheet>
</template>
<script lang="ts" setup>
import { TMessageExt } from "@/entities/messageExt/model/types";

interface IMessageDataCardProps {
  messageData: TMessageExt;
  width?: string;
}
withDefaults(defineProps<IMessageDataCardProps>(), {});
</script>

<style lang="scss" scoped>
.v-application p {
  margin-bottom: 0px;
}
</style>
