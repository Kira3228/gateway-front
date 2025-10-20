import { DataTableHeader } from "vuetify"

export type THeaderColumn = {
  headers: DataTableHeader[]
  sortByFields?: string[]
  sortDescFields?: boolean[],
}