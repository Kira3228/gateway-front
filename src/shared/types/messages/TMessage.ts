import { MessageStatusEnum } from "./MessageStatusEnum"
import { SecurityLabelEnum } from "./SecurityLabel.enum"

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


