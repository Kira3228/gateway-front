<template>
  <v-dialog @click:outside="handleCloseClick" v-model="value" max-width="500px">
    <v-card>
      <v-card-title>Детали строки</v-card-title>
      <v-card-text v-if="messageData">
        <p>ID: {{ messageData.id }}</p>
        <p>ID: {{ messageData.createdAt }}</p>
        <p>ID: {{ messageData.receiving_at }}</p>
        <p>ID: {{ messageData.received_at }}</p>
        <p>ID: {{ messageData.sending_at }}</p>
        <p>ID: {{ messageData.sent_at }}</p>
        <p>ID: {{ messageData.delivered_at }}</p>
        <p>ID: {{ messageData.read_at }}</p>
        <p>ID: {{ messageData.totalFilesCount }}</p>
        <p>ID: {{ messageData.totalSizeBytes }}</p>
        <p>ID: {{ messageData.checksum }}</p>
        <p>ID: {{ messageData.metadata }}</p>
      </v-card-text>
      <v-card-text v-else>ХУЙ</v-card-text>
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
});
</script>
