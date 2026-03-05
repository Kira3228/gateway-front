import { defineStore } from "pinia";
import { ref } from "vue";

export const useMessageExportStore = defineStore(`message-export-store`, () => {
  const format = ref<string>("csv")
  const fileName = ref<string>("document")
  const invisibleFieldsIsAvailable = ref<boolean>(false)

  return {
    format, fileName, invisibleFieldsIsAvailable
  }
})