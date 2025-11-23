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
          sortField: `fullName`,
          sortOrder: 'ASC'
        }
      },
      {
        key: 2,
        component: SortAlphabeticalDescending,
        value: {
          sortField: 'fullName',
          sortOrder: 'DESC'
        }
      },
    ],
    [
      {
        key: 3,
        component: SortCalendarAscending,
        value: {
          sortField: 'changeDatetime',
          sortOrder: `ASC`
        }
      },
      {
        key: 4,
        component: SortCalendarDescending,
        value: {
          sortField: 'changeDatetime',
          sortOrder: `DESC`
        }
      }
    ]
  ];
  const { changeDatetime, fullName } = storeToRefs(useStatusHistoryOrderSwitchStore())
  const { setOrder, refresh } = useStatusHistoryOrderSwitchStore()

  return { StatusHstorySortButtons, changeDatetime, fullName, setOrder, refresh }
}