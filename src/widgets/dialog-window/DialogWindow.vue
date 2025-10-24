<template>
  <v-dialog
    class=""
    fullscreen
    hide-overlay
    @click:outside="handleCloseClick"
    @keydown="handleCloseClick"
    v-model="localValue"
    max-width="500px"
    transition="dialog-bottom-transition"
  >
    <v-card class="">
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="handleCloseClick"><v-icon>mdi-close</v-icon></v-btn>
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card>
        <div class="">
          <div class="tw-max-w-xs tw-flex-col">
            <div class="card">
              <p class="card-text header">ID:</p>
              <p class="card-text">{{ messageData.id }}</p>
            </div>
            <div class="card">
              <p class="card-text header">Контрольная сумма:</p>
              <p class="card-text wrap-text">{{ messageData.checksum }}</p>
            </div>
            <div class="card">
              <p class="card-text">Создано:</p>
              <p>{{ messageData.createdAt }}</p>
            </div>
            <div class="card">
              <p class="card-text">Доставлено: {{ messageData.delivered_at }}</p>
            </div>
            <div class="card">
              <p class="card-text">Метаданные: {{ messageData.metadata }}</p>
            </div>
            <div class="card">
              <p class="card-text">Прочитано: {{ messageData.read_at }}</p>
            </div>
            <div class="card">
              <p class="card-text">Получено: {{ messageData.received_at }}</p>
            </div>
            <div class="card">
              <p class="card-text">Получение: {{ messageData.receiving_at }}</p>
            </div>
            <div class="card">
              <p class="card-text">Отправка: {{ messageData.sending_at }}</p>
            </div>
            <div class="card">
              <p class="card-text">Отправлено: {{ messageData.sent_at }}</p>
            </div>
            <div class="card">
              <p class="card-text">Количесво файлов: {{ messageData.totalFilesCount }}</p>
            </div>
            <div class="card">
              <p class="card-text">Размер: {{ messageData.totalSizeBytes }} байт</p>
            </div>
          </div>
        </div>
      </v-card>
      <v-responsive>
        <v-card elevation="">
          <v-virtual-scroll
            elevation="0"
            :bench="0"
            :items="messageFiles"
            height="630"
            item-height="64"
          >
            <template v-slot:default="{ item }">
              <v-list-item :key="item.id">
                <v-list-item-content>
                  <v-list-item-title>
                    <strong>ID {{ item.fileName }}</strong>
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-icon small> mdi-open-in-new </v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-responsive>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt";
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import { mock } from "./mock";
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
    messageFiles: {
      type: Array as PropType<TMessageFile[]>,
      default: () => [],
    },
  },
  data() {
    return {
      localValue: this.value,
      testData: mock,
    };
  },
  computed: {
    testData() {
      return mock;
    },
  },
  methods: {
    handleCloseClick() {
      this.localValue = false;
      this.$emit(`close-click`, false);
    },
  },
  watch: {
    value(newVal) {
      this.localValue = newVal;
    },
    localValue(newVal) {
      this.$emit("input", newVal);
    },
  },
  mounted() {
    console.log(this.messageFiles);
  },
});
</script>
<style lang="scss" scoped>
.card {
  margin: 10px 0px 0px 16px;
  display: flex;
  gap: 10px;
}
.header {
  font-weight: bold;
}
.card-text {
  font-size: 15px;
}
.wrap-text {
  word-break: break-all;
}
</style>
