import { MessageStatusEnum } from "@/entities/message/model/types"
import { TOption } from "@/shared/UI/SelectInput/TOptions"
import { useStatusFilterStore } from "./store"
import { storeToRefs } from "pinia"
import { UserTypeEnum } from "@/shared/types/common/UserType.enum"

export const useStatusFilterModel = () => {
  const store = useStatusFilterStore()
  const { newStatuses, oldStatuses, userTypes } = storeToRefs(store)

  const selectStatusHisotryItems: TOption[] = [
    {
      label: MessageStatusEnum.создано,
      value: MessageStatusEnum.создано
    },
    {
      label: `принимается`,
      value: MessageStatusEnum.принимается
    },
    {
      label: MessageStatusEnum.принято,
      value: MessageStatusEnum.принято
    },
    {
      label: MessageStatusEnum.обработано,
      value: MessageStatusEnum.обработано
    },
    {
      label: MessageStatusEnum.отправляется,
      value: MessageStatusEnum.отправляется
    },
    {
      label: MessageStatusEnum.отправлено,
      value: MessageStatusEnum.отправлено
    },
    {
      label: MessageStatusEnum.доставлено,
      value: MessageStatusEnum.доставлено
    },
    {
      label: MessageStatusEnum.прочитано,
      value: MessageStatusEnum.прочитано
    },
    {
      label: MessageStatusEnum.отменено_источником,
      value: MessageStatusEnum.отменено_источником
    },
    {
      label: MessageStatusEnum.ошибка_принятия,
      value: MessageStatusEnum.ошибка_принятия
    },
    {
      label: MessageStatusEnum.ошибка_обработки,
      value: MessageStatusEnum.ошибка_обработки
    },
    {
      label: MessageStatusEnum.ошибка_отправки,
      value: MessageStatusEnum.ошибка_отправки
    },
    {
      label: MessageStatusEnum.ошибка_доставки,
      value: MessageStatusEnum.ошибка_доставки
    },
    {
      label: MessageStatusEnum.ошибка_прочтения,
      value: MessageStatusEnum.ошибка_прочтения
    },

  ]

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