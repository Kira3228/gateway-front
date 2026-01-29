import FileSizeAscSortIcon from "@/shared/icons/FileSizeAscSort.icon.vue"
import FileSizeDescSortIcon from "@/shared/icons/FileSizeDescSort.icon.vue"
import SortAlphabeticalAscending from "@/shared/icons/SortAlphabeticalAscending.vue"
import SortAlphabeticalDescending from "@/shared/icons/SortAlphabeticalDescending.vue"
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem"
import { ref } from "vue"
import { useFileOrderSwitchStore } from "./store"
import { storeToRefs } from "pinia"

export const useFileOrderSwitchModel = () => {
  const MessageFileSortButtons = ref<TButtonGroupItem[][]>([
    [
      {
        key: 1,
        component: SortAlphabeticalAscending,
        value: {
          sortField: `filename`,
          sortOrder: 'ASC'
        },
        tooltipText: `Сортировка A-Z`
      },
      {
        key: 2,
        component: SortAlphabeticalDescending,
        value: {
          sortField: 'filename',
          sortOrder: 'DESC'
        },
        tooltipText: `Сортировка Z-A`

      },
    ],
    [
      {
        component: FileSizeAscSortIcon, key: 3, value: {
          sortField: `filesize`,
          sortOrder: "ASC"
        },
        tooltipText: `Размер файла по возрастанию`
      }, {
        component: FileSizeDescSortIcon, key: 4, value: {
          sortField: `filesize`,
          sortOrder: "DESC"
        },
        tooltipText: `Размер файла по убыванию`

      },
    ],
  ]
  )

  const { setOrder, refresh } = useFileOrderSwitchStore()
  const { createdAtOrder, fileNameOrder, fileSizeBytesOrder } = storeToRefs(useFileOrderSwitchStore())
  return {
    MessageFileSortButtons,
    setOrder,
    refresh,
    createdAtOrder,
    fileNameOrder,
    fileSizeBytesOrder
  }
}