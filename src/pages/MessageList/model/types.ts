import { THeaderColumn } from "@/entities/header/model/types";
import { TMessage } from "@/entities/message/model/types";
import { useMessageTableModel } from "./model";

export interface IMessageTableData {

}
export interface IMessageTableMethods {
  handleRowClick(data: any): void

}
export interface IMessageTableComputed {
  headers: THeaderColumn[],
  messages: TMessage[],
  isLoading: boolean,
}
export interface IMessageTableProps {

}