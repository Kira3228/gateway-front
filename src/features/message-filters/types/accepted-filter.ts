// export type AcceptedFilters = {
//   priority: [number | undefined, number | undefined]
//   metadata: boolean | undefined
//   createDateRange: [string | undefined, string | undefined]
//   updateDateRange: [string | undefined, string | undefined]
//   categories: string[]
//   messageTypes: string[]
//   statuses: string[]
//   securityLabels: string[]
// }

export type AcceptedFilters = {
  priority: [number | undefined, number | undefined]
  metadata: boolean | undefined
  createDateRange: [string, string]
  updateDateRange: [string, string]
  categories: string[]
  messageTypes: string[]
  statuses: string[]
  securityLabels: string[]
}