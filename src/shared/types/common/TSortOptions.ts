export type TSortOptions = {
  label: string
  value: TValue
}

export type TValue = {
  sortField: string
  sortOrder: "ASC" | "DESC"
}