<template>
  <div class="tw-flex-1 tw-overflow-y-auto tw-px-3 tw-pb-24">
    <div class="tw-flex tw-flex-col tw-gap-3">
      <v-expansion-panels accordion multiple dense :elevation="10">
        <PriorityFilter v-model="priority" />
        <MetadataFilter v-model="metadata" />
        <DateFilter title="Создано" v-model="createDateRange" />
        <DateFilter title="Обновлено" v-model="updateDateRange" />
        <CheckboxFilter
          title="Категория"
          :items="Object.values(MessageCategory)"
          v-model="categories"
        />
        <CheckboxFilter
          title="Тип сообщений"
          :items="Object.values(MessageType)"
          v-model="messageTypes"
        />
        <CheckboxFilter
          title="Статус"
          :items="Object.values(MessageStatusEnum)"
          v-model="statuses"
        />
        <CheckboxFilter
          title="Метка безопасности"
          :items="Object.values(SecurityLabelEnum)"
          v-model="securityLabels"
        />
      </v-expansion-panels>
    </div>
    <div
      class="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-bg-white tw-border-t tw-p-4 tw-z-10 tw-flex tw-gap-2 tw-justify-center"
    >
      <Button
        @click="
          handleAcceptFilters({
            categories: categories,
            createDateRange: createDateRange,
            messageTypes: messageTypes,
            metadata: metadata,
            priority: priority,
            securityLabels: securityLabels,
            statuses: statuses,
            updateDateRange: updateDateRange,
          })
        "
        height="36"
        color="primary"
        class="tw-text-white tw-flex-1"
      >
        <span>Применить</span>
      </Button>
      <Button height="36" outlined color="error" class="tw-flex-1">
        <span>Сбросить</span>
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import PriorityFilter from "./PriorityFilter.vue";
import MetadataFilter from "./MetadataFilter.vue";
import { ref } from "vue";
import CheckboxFilter from "./CheckboxFilter.vue";
import { Button } from "@/shared-ui/src/components/Button";
import { useAcceptFilters } from "../model/use-accept-filters";
import {
  MessageCategory,
  MessageType,
  MessageStatusEnum,
  SecurityLabelEnum,
} from "@/entities/message/model/types";
import DateFilter from "./DateFilter.vue";

const { handleAcceptFilters } = useAcceptFilters();

const priority = ref<[number | null, number | null]>([null, null]);
const metadata = ref<boolean | null>(null);
const createDateRange = ref<[string | null, string | null]>([null, null]);
const updateDateRange = ref<[string | null, string | null]>([null, null]);
const categories = ref<string[]>([]);
const messageTypes = ref<string[]>([]);
const statuses = ref<string[]>([]);
const securityLabels = ref<string[]>([]);
</script>
