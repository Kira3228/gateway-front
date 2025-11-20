import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import SortAlphabeticalAscending from "@/shared/icons/SortAlphabeticalAscending.vue"
import SortAlphabeticalDescending from "@/shared/icons/SortAlphabeticalDescending.vue"
import FileSizeAscSort from "@/shared/icons/FileSizeAscSort.icon.vue"
import FileSizeDescSort from "@/shared/icons/FileSizeDescSort.icon.vue"
import SortCalendarDescending from "@/shared/icons/SortCalendarDescending.vue"
import SortCalendarAscending from "@/shared/icons/SortCalendarAscending.vue"

export const MessageFileSortButtons: TButtonGroupItem[][] = [
  [
    {
      key: 1,
      component: SortAlphabeticalAscending,
      value: {
        sortField: `user`,
        sortOrder: 'ASC'
      }
    },
    {
      key: 2,
      component: SortAlphabeticalDescending,
      value: {
        sortField: 'user',
        sortOrder: 'DESC'
      }
    },
  ],
  [
    {
      component: FileSizeAscSort, key: 3, value: {
        sortField: ` `,
        sortOrder: "ASC"
      }
    },
    {
      component: FileSizeDescSort, key: 4, value: {
        sortField: ``,
        sortOrder: "DESC"
      }
    },
  ],
  [
    {
      component: SortCalendarAscending, key: 5, value: {
        sortField: ` `,
        sortOrder: "ASC"
      }
    }, {
      component: SortCalendarDescending, key: 6, value: {
        sortField: ``,
        sortOrder: "DESC"
      }
    }
  ]
]