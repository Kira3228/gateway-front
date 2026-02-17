<template>
  <div class="tw-flex-1 tw-overflow-y-auto tw-px-3 tw-pb-24">
    <div class="tw-flex tw-flex-col tw-gap-3">
      <v-expansion-panels accordion multiple dense :elevation="10">
        <PriorityFilter v-model="unacceptedPriority" />
        <MetadataFilter v-model="metadata" />
        <CreatedAtFilter />
        <UpdatedAtFilter />
        <CategoryFilter />
        <TypeFilter />
        <StatusFilter />
        <SecurityLabelFilter />
      </v-expansion-panels>
    </div>
    <div
      class="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-bg-white tw-border-t tw-p-4 tw-z-10 tw-flex tw-gap-2 tw-justify-center"
    >
      <Button
        @click="handleAcceptFilters(unacceptedPriority)"
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
import CreatedAtFilter from "./CreatedAtFilter.vue";
import UpdatedAtFilter from "./UpdatedAtFilter.vue";
import CategoryFilter from "./CategoryFilter.vue";
import TypeFilter from "./TypeFilter.vue";
import StatusFilter from "./StatusFilter.vue";
import SecurityLabelFilter from "./SecurityLabelFilter.vue";
import { Button } from "@/shared-ui/src/components/Button";
import { useMessageFiltersStore } from "../model/use-message-filters-store";
import { useAcceptFilters } from "../model/use-accept-filters";

const messageFilterStore = useMessageFiltersStore();
const { handleAcceptFilters } = useAcceptFilters();

const unacceptedPriority = ref<[number | null, number | null]>([null, null]);

const metadata = ref<boolean | null>(null);
</script>
