import { TSortOptions } from "@/shared/types/common/TSortOptions";

export const items: TSortOptions[] = [
  {
    label: `Сначала большие`, value: {
      sortField: "fileSize",
      sortOrder: "ASC"
    }
  },
  {
    label: `Сначала маленькие`, value: {
      sortField: "fileSize",
      sortOrder: "DESC"
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
      sortOrder: "ASC"
    }
  },

]