import { TUser } from "@/shared/types/common/TUser"

export type TStatusHistoryItem = {
  id: number,
  oldStatus: MessageStatusEnum | "",
  newStatus: MessageStatusEnum | "",
  reason: string,
  changeDatetime: string,
  metadata: string,
  messageId: number,
  changedByUserId: number,
  user: TUser
}

export enum MessageStatusEnum {
  создано = 'создано',
  принимается = 'принимается',
  принято = 'принято',
  обработано = 'обработано',
  отправляется = 'отправляется',
  отправлено = 'отправлено',
  доставлено = 'доставлено',
  прочитано = 'прочитано',
  отменено_источником = 'отменено_источником',
  ошибка_принятия = 'ошибка_принятия',
  ошибка_обработки = 'ошибка_обработки',
  ошибка_отправки = 'ошибка_отправки',
  ошибка_доставки = 'ошибка_доставки',
  ошибка_прочтения = 'ошибка_прочтения',
}

export type TQueryParams = {
  page?: number
  limit?: number
  changeDatetime?: "ASC" | "DESC" | ""
  fullName?: "ASC" | "DESC" | ""
  oldStatuses?: string[]
  newStatuses?: string[]
  userTypes?: string[]
  searchString?: string
}

export type StatusHistoryResponse = {
  history: TStatusHistoryItem[]
  totalPage: number
}