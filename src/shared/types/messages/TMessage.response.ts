import { TMessage } from "./TMessage"

export type IMessageRespone = {
  totalCount: number
  items: TMessage[]
  page: number
  totalPages: number
  limit: number
}