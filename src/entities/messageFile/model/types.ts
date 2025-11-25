export type TMessageFile = {
  id: number
  messageId: number
  fileName: string
  filePath: string
  fileType: string
  fileSizeBytes: string,
  checksum: string
  mimeType: string
  fileOrder: number,
  description: string
  isMetadataFile: boolean,
  created_at: string
}

export type TQueryParams = {
  page?: number
  limit?: number
  fileNameOrder?: "ASC" | "DESC" | ""
  fileSizeBytesOrder?: "ASC" | "DESC" | ""
  createdAtOrder?: "ASC" | "DESC" | ""
  searchString?: string
}

export type TMessageFilesResponse = {
  files: TMessageFile[]
  totalPage: number
}