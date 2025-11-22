<template>
  <ext-data-card title="Метаданные">
    <div class="tw-max-w-xs tw-ml-4 tw-flex tw-flex-col tw-gap-y-2">
      <div class="tw-flex tw-flex-col">
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">ID</p>
        <p class="tw-text-lg">{{ messageExts.id }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">
          Контрольная сумма:
        </p>
        <p class="tw-text-lg tw-break-all wrap-text">
          {{ messageExts.checksum }}
        </p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Создано:</p>
        <p class="tw-text-lg">{{ messageExts.createdAt }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Доставлено</p>
        <p class="tw-text-lg">{{ messageExts.delivered_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Метаданные</p>
        <p class="tw-text-lg">{{ messageExts.metadata }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Прочитано</p>
        <p class="tw-text-lg">{{ messageExts.read_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Получено</p>
        <p class="tw-text-lg">{{ messageExts.received_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Получение</p>
        <p class="tw-text-lg">{{ messageExts.receiving_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Отправка</p>
        <p class="tw-text-lg">{{ messageExts.sending_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Отправлено</p>
        <p class="tw-text-lg">{{ messageExts.sent_at }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Количесво файлов</p>
        <p class="tw-text-lg">{{ messageExts.totalFilesCount }}</p>
      </div>
      <div>
        <p class="tw-text-xs tw-text-blue-700 tw-font-bold">Размер</p>
        <p class="tw-text-lg">{{ messageExts.totalSizeBytes }} байт</p>
      </div>
    </div>
  </ext-data-card>
</template>
<script lang="ts" setup>
import ExtDataCard from "@/shared/UI/ExtDataCard/ExtDataCard.vue";
import { useDataCardModel } from "../model/model";
import { onMounted } from "vue";

interface IMessageDataCardProps {
  id: string;
}
const props = withDefaults(defineProps<IMessageDataCardProps>(), {});
const { init, messageExts } = useDataCardModel();

onMounted(() => {
  init(props.id);
});
</script>

<style lang="scss" scoped>
.v-application p {
  margin-bottom: 0px;
}
</style>
