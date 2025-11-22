<template>
  <ComplexVirtualScroll
    :height="750"
    :isLoading="isLoading"
    :itemHeight="105"
    :items="files"
    :skeletonHeight="88"
    :skeletonsQuantity="8"
    :error="error"
  >
    <template #listItem="{ item, index }">
      <list-item :key="item.id" :item="item">
        <template v-slot:content="{ item }">
          <p class="tw-text-base tw-text-blue-700 tw-font-bold">
            {{ item.fileName }}
          </p>
          <p class="tw-text-base tw-text-gray-600">
            {{ item.filePath }} | {{ item.fileSizeBytes }} байт
          </p>
          <span class="tw-text-sm tw-mt-4"> {{ item.description }} </span>
        </template>
      </list-item>
      <div
        v-if="index === files.length - 1"
        v-intersect="onIntersect"
        style="height: 1px; width: 100%"
      ></div>
    </template>
  </ComplexVirtualScroll>
</template>

<script lang="ts" setup>
import ComplexVirtualScroll from "@/shared/UI/ComplexVirtualScroll/ComplexVirtualScroll.vue";
import ListItem from "@/shared/UI/ListItem/ListItem.vue";
import { useMessageFileVirtualScrollModel } from "../model/model";
import { onMounted } from "vue";
interface IProps {}
const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: `load-more`): void;
}>();

const { init, error, files, isLoading } = useMessageFileVirtualScrollModel();

const onIntersect = () => {
  emit(`load-more`);
};
</script>
