import { UserTypeEnum } from "@/shared/types/common/UserType.enum";
import { TOption } from "@/shared/UI/SelectInput/TOptions";

export const UserTypeOptions: TOption[] = [
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