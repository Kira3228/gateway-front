export type TMessageExt = {
  id: number
  createdAt: Date,
  receiving_at: Date
  received_at: Date
  sending_at: Date
  sent_at: Date
  delivered_at: Date
  read_at: Date | null,
  totalFilesCount: number,
  totalSizeBytes: number,
  checksum: string,
  metadata: string
}