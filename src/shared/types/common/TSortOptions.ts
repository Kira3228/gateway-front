export type TSortOptions = {
  label: string
  value: TSortValue
}

export type TSortValue = {
  sortField: string
  sortOrder: "ASC" | "DESC"
}