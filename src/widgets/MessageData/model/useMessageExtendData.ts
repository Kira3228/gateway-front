import { useMessageExtStore } from "@/entities/messageExt/model/store"
import { onMounted } from "vue"
import { useRoute, useRouter } from "vue-router/composables"

export const useMessageExtendData = () => {
  const messageExtendData = useMessageExtStore()
  const route = useRoute()
  const id = String(route.params.id)

  onMounted(async () => {
    await messageExtendData.getMessageExt(id)
  })

  return {
    id
  }
}