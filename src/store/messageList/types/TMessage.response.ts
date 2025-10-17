import { TMessage } from "./TMessage"

export type IMessageRespone = {
  messages: TMessage[]
  page: number
  totalPages: number
  
}