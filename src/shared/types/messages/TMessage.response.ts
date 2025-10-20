import { TMessage } from "./TMessage"

export type IMessageRespone = {
  messages: TMessage[]
  totalCount: number
  page: number
  totalPages: number
  limit: number
}