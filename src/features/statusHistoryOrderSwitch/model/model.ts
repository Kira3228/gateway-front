import SortAlphabeticalAscending from "@/shared/icons/SortAlphabeticalAscending.vue";
import SortAlphabeticalDescending from "@/shared/icons/SortAlphabeticalDescending.vue";
import SortCalendarAscending from "@/shared/icons/SortCalendarAscending.vue";
import SortCalendarDescending from "@/shared/icons/SortCalendarDescending.vue";
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem";
import { useStatusHistoryOrderSwitchStore } from "./store";
import { storeToRefs } from "pinia";

export const useStatusHistoryOrderSwitchModel = () => {
  const StatusHstorySortButtons: TButtonGroupItem[][] = [
    [
      {
        key: 1,
        component: SortAlphabeticalAscending,
        value: {
          sortField: `username`,
          sortOrder: 'ASC'
        }
      },
      {
        key: 2,
        component: SortAlphabeticalDescending,
        value: {
          sortField: 'username',
          sortOrder: 'DESC'
        }
      },
    ],
    [
      {
        key: 3,
        component: SortCalendarAscending,
        value: {
          sortField: 'createdAt',
          sortOrder: `ASC`
        }
      },
      {
        key: 4,
        component: SortCalendarDescending,
        value: {
          sortField: 'createdAt',
          sortOrder: `DESC`
        }
      }
    ]
  ];

  const { setOrder, refresh } = useStatusHistoryOrderSwitchStore()

  const { createdAtOrder, usernameOrder } = storeToRefs(useStatusHistoryOrderSwitchStore())

  return {
    StatusHstorySortButtons,
    setOrder,
    refresh,
    createdAtOrder,
    usernameOrder
  }
}