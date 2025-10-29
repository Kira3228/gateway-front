export type TSortOptions = {
  label: string
  value: TValue
}

type TValue = {
  sortField: string
  sortOrder: "ASC" | "DESC"
}