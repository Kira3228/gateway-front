import FileSizeAscSortIcon from "@/shared/icons/FileSizeAscSort.icon.vue"
import FileSizeDescSortIcon from "@/shared/icons/FileSizeDescSort.icon.vue"
import SortAlphabeticalAscending from "@/shared/icons/SortAlphabeticalAscending.vue"
import SortAlphabeticalDescending from "@/shared/icons/SortAlphabeticalDescending.vue"
import SortCalendarAscending from "@/shared/icons/SortCalendarAscending.vue"
import SortCalendarDescending from "@/shared/icons/SortCalendarDescending.vue"
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem"
import { ref } from "vue"

export const useFileOrderSwitchModel = () => {
  const MessageFileSortButtons = ref<TButtonGroupItem[][]>([
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
    [{
      component: FileSizeAscSortIcon, key: 3, value: {
        sortField: ` `,
        sortOrder: "ASC"
      }
    }, {
      component: FileSizeDescSortIcon, key: 4, value: {
        sortField: ``,
        sortOrder: "DESC"
      }
    },],
    [{
      component: SortCalendarAscending, key: 5, value: {
        sortField: ` `,
        sortOrder: "ASC"
      }
    }, {
      component: SortCalendarDescending, key: 6, value: {
        sortField: ``,
        sortOrder: "DESC"
      }
    }]
  ])


  return {
    MessageFileSortButtons
  }
}