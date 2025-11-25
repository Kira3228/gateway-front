export type TMessage = {
  id: number
  messageId: string
  messageType: "TEXT" | "BINARY",
  messageCategory: "normal" | "urgent" | "low",
  status: MessageStatusEnum,
  priority: number,
  metadataParsed: boolean,
  subject: string,
  securityLabel: SecurityLabelEnum,
  messageNumber: string,
  messageCopies: number,
  numberCopy: number,
  senderName: string,
  createdAt: string,
  updatedAt: string,
  userFromId: number,
  userToId: number,
  userOperatorId: number,
  targetSystemId: number,
  sourceSystemId: number,
  pointId: number
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

export enum SecurityLabelEnum {
  НС = "HC", С = "C", СС = "CC", ОВ = "OB"
}

export type MessageRequest = {
  messages: TMessage[]
  messageCount: number
  totalPage: number
}