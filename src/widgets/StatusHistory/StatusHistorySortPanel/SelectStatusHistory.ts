import { MessageStatusEnum } from "@/shared/types/messages/MessageStatusEnum"
import { TOption } from "@/shared/UI/SelectInput/TOptions"

export const SelectStatusHisotry: TOption[] = [
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


