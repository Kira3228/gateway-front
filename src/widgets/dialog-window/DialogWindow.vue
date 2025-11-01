<template>
  <v-dialog
    fullscreen
    hide-overlay
    @click:outside="handleCloseClick"
    @keydown="handleCloseClick"
    v-model="localValue"
    transition="dialog-bottom-transition"
  >
    <v-card class="dialog-root">
      <v-toolbar class="flex-grow-0" dark color="primary">
        <v-btn icon dark @click="handleCloseClick"><v-icon>mdi-close</v-icon></v-btn>
        <v-toolbar-title>{{ toolbarTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <div class="dialog-content tw-gap-2 tw-flex-row tw-flex-1">
        <message-data-card-vue :messageData="messageData"></message-data-card-vue>
        <v-divider vertical></v-divider>
        <message-files-vue :files="messageFiles"></message-files-vue>
        <v-divider vertical></v-divider>
        <status-history-vue :items="statusHistory"></status-history-vue>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { TMessageFile } from "@/shared/types/common/TMessageFile";
import { TStatusHistory } from "@/shared/types/common/TStatusHistory";
import { TMessageExt } from "@/shared/types/message-ext/TMessageExt";
import ListItemVue from "@/shared/UI/ListItem/ListItem.vue";
import SheetVue from "@/shared/UI/Sheet/Sheet.vue";
import VirtualScrollVue from "@/shared/UI/VirtualScroll/VirtualScroll.vue";
import Vue from "vue";
import { Prop, PropType } from "vue/types/v3-component-props";
import MessageDataCardVue from "../MessageData/MessageDataCard.vue";
import { mock } from "./mock";
import MessageFilesVue from "../MessageFiles/MessageFiles.vue";
import StatusHistoryVue from "../StatusHistory/StatusHistory.vue";
export default Vue.extend({
  name: `DialogWindow`,
  components: {
    ListItemVue,
    MessageDataCardVue,
    SheetVue,
    VirtualScrollVue,
    MessageFilesVue,
    StatusHistoryVue,
  },
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
    statusHistory: {
      type: Array as PropType<TStatusHistory[]>,
      default: [],
    },
    toolbarTitle: { type: String, default: "" },
  },
  data() {
    return {
      localValue: this.value,
      c: mock,
    };
  },

  methods: {
    handleCloseClick(e: KeyboardEvent & PointerEvent) {
      if (e.key === `Escape` || e.pointerType === `mouse`) {
        console.log(e);
        this.localValue = false;
        this.$emit(`close-click`, false);
      }
    },
    getColor(isActive: boolean): `green` | `red` {
      return isActive ? `green` : `red`;
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
  mounted() {},
});
</script>
<style lang="scss" scoped>
.dialog-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.dialog-content {
  flex: 1 1 auto;
  display: flex;
  min-height: 0;
}
.left-card {
  width: auto; // фикс или auto
  flex-shrink: 0;
  height: 100%;
}
.scroll-card,
.virtual-scroll {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
}
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
