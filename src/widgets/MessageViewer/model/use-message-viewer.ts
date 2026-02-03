import { useMessageStore } from "@/entities/message/model/store";
import { onMounted } from "vue"
import { useRoute, useRouter } from "vue-router/composables";

export const useMessageViewer = () => {
  const { getMessages } = useMessageStore()
  const route = useRoute();
  const router = useRouter();

  onMounted(() => {
    const pageFromUrl = Number(route.query.page) || 1;
    const presetFromUrl = String(route.query.preset) || undefined

    getMessages(pageFromUrl)
  })


}