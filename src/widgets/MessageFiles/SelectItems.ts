import { TSortOptions } from "@/shared/types/common/TSortOptions";

export const items: TSortOptions[] = [
  {
    label: `Сначала большие`, value: {
      sortField: "fileSizeBytes",
      sortOrder: "DESC"
    }
  },
  {
    label: `Сначала маленькие`, value: {
      sortField: "fileSizeBytes",
      sortOrder: "ASC"
    }
  },
  {
    label: `A-Z`, value: {
      sortField: "fileName",
      sortOrder: "ASC"
    }
  },
  {
    label: `Z-A`, value: {
      sortField: "fileName",
      sortOrder: "DESC"
    }
  },

]