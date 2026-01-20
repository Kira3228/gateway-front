import { MessageStatusEnum } from "@/entities/message/model/types"
import { TOption } from "@/shared/UI/SelectInput/TOptions"
import { useStatusFilterStore } from "./store"
import { storeToRefs } from "pinia"
import { UserTypeEnum } from "@/shared/types/common/UserType.enum"

export const useStatusFilterModel = () => {
  const store = useStatusFilterStore()
  const { newStatuses, oldStatuses, userTypes } = storeToRefs(store)

  const selectStatusHisotryItems: TOption[] = [
    MessageStatusEnum.создано,
    MessageStatusEnum.принимается,
    MessageStatusEnum.принято,
    MessageStatusEnum.обработано,
    MessageStatusEnum.отправляется,
    MessageStatusEnum.отправлено,
    MessageStatusEnum.доставлено,
    MessageStatusEnum.прочитано,
    MessageStatusEnum.отменено_источником,
    MessageStatusEnum.ошибка_принятия,
    MessageStatusEnum.ошибка_обработки,
    MessageStatusEnum.ошибка_отправки,
    MessageStatusEnum.ошибка_доставки,
    MessageStatusEnum.ошибка_прочтения,
  ].map((status) => ({
    label: status,
    value: status
  }))

  const selectUserType: TOption[] = [
    {
      label: `Администратор`,
      value: UserTypeEnum.admin
    },
    {
      label: `Оператор`,
      value: UserTypeEnum.operator
    },
    {
      label: `Получатель`,
      value: UserTypeEnum.receiver
    },
    {
      label: `Отправитель`,
      value: UserTypeEnum.sender
    },
  ]


  return { selectStatusHisotryItems, selectUserType, newStatuses, oldStatuses, userTypes, store }
}