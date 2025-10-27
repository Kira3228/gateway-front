import { MessageStatusEnum } from "../messages/MessageStatusEnum";
import { TUser } from "./TUser";

export type TStatusHistory = {
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