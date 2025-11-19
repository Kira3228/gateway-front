import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import FileSizeAscSrotIcon from "@/shared/icons/FileSizeAscSort.icon.vue"
import FileSizeDescSrotIcon from "@/shared/icons/FileSizeDescSort.icon.vue"
import SortAlphabetAsc from "@/shared/icons/SortAlphabeticalAscending.vue"
import SortAlphabetDesc from "@/shared/icons/SortAlphabeticalDescending.vue"
export const buttons: TButtonGroupItem[][] = [
  [
    {
      component: FileSizeAscSrotIcon,
      key: 1,
      value: {
        sortField: `fileSize`,
        sortOrder: `ASC`
      }
    },
    {
      component: FileSizeDescSrotIcon,
      key: 2,
      value: {
        sortField: `fileSize`,
        sortOrder: `DESC`
      }
    },
  ],
  [
    {
      component: SortAlphabetAsc,
      key: 3,
      value: {
        sortField: `fileName`,
        sortOrder: `ASC`
      }
    },
    {
      component: SortAlphabetDesc,
      key: 4,
      value: {
        sortField: `fileName`,
        sortOrder: `DESC`
      }
    },
  ],
]  