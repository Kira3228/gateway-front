<template>
  <div class="tw-flex tw-gap-2">
    <v-btn-toggle
      v-model="selectedSort"
      v-for="group in items"
      :key="group[0].key"
    >
      <button-vue
        v-for="btn in group"
        @click="handleClick(btn)"
        :key="btn.key"
        :height="height"
        outlined
        :elevation="0"
        :isActive="isActive"
      >
        <component :is="btn.component"></component>
      </button-vue>
    </v-btn-toggle>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { PropType } from "vue/types/v3-component-props";
import ButtonVue from "../Button/Button.vue";
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import { Emit } from "vue-property-decorator";

interface IButtonGroupData {
  isActive: boolean;
  activeBtnKey: null | number;
  selectedSort: any;
}

interface IButtonGroupMethods {
  handleClick(btnData: any): void;
}

interface IButtonGroupProps {
  height: number;
  items: TButtonGroupItem[][];
}

export default Vue.extend<
  IButtonGroupData,
  IButtonGroupMethods,
  unknown,
  IButtonGroupProps
>({
  name: "ButtonGroup",
  data() {
    return {
      isActive: true,
      activeBtnKey: null,
      selectedSort: [],
    };
  },
  components: {
    ButtonVue,
  },
  props: {
    height: {
      type: Number,
      default: 48,
    },
    items: {
      type: Array as PropType<TButtonGroupItem[][]>,
      default: () => [],
    },
  },
  computed: {
    isActive: {
      get() {
        return;
      },
      set() {
        this;
      },
    },
  },
  methods: {
    handleClick(btnData: TButtonGroupItem) {
      if (this.activeBtnKey === btnData.key) {
        this.activeBtnKey = null;
        this.$emit(`click-sort`, {
          key: null,
          sortField: null,
          sortOrder: null,
        });
      } else {
        this.activeBtnKey === btnData.key;
        this.$emit(`click-sort`, btnData);
      }
    },
  },
  watch: {
    selectedSort() {
      console.log(this.selectedSort);
    },
  },
});
</script>
