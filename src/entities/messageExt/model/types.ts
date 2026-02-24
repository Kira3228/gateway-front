export type TMessageExt = {
  id: number
  createdAt: string,
  receiving_at: string
  received_at: string
  sending_at: string
  sent_at: string
  delivered_at: string
  read_at: string | null,
  totalFilesCount: number,
  totalSizeBytes: number,
  checksum: string,
  metadata: string
}