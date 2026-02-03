import { TMessage } from "@/entities/message/model/types";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router/composables";

export const useMessageViewStore = defineStore(`message-view-store`, () => {
  const currentPage = ref<number>(1)
  const totalPage = ref<number>(0)
  const limit = ref<number>(15)

  const router = useRouter()
  const handleRowClick = (data: TMessage) => {
    router.push({
      name: `details`,
      params: {
        id: data.messageId,
      },
    });
  };


  return {
    currentPage, totalPage, limit, handleRowClick
  }
})