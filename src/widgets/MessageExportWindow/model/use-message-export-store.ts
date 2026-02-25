import { defineStore } from "pinia";
import { ref } from "vue";

export const useMessageExportStore = defineStore(`message-export-store`, () => {
  const format = ref<string[]>()
  const fileNam = ref<string>()

  const getDocument = () => { 
    
  }
})