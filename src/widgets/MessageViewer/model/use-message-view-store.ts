import { useMessageStore } from "@/entities/message/model/store";
import { MessageRequest } from "@/entities/message/model/types";
import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useMessageViewStore = defineStore(`message-view-store`, () => {
  const currentPage = ref<number>(1)
  const totalPage = ref<number>(0)



  const { isLoading, error, messages, getMessages } = useMessageStore()




  return {
  }

})