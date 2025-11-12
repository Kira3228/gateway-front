import SortAlphabeticalAscending from "@/shared/icons/SortAlphabeticalAscending.vue"
import SortAlphabeticalDescending from "@/shared/icons/SortAlphabeticalDescending.vue"
import SortCalendarAscending from "@/shared/icons/SortCalendarAscending.vue"
import SortCalendarDescending from "@/shared/icons/SortCalendarDescending.vue"
import { TButtonGroupItem } from "@/shared/types/common/TButtonGroupItem"
import store from "@/store"




export const SelectSort: TButtonGroupItem[] = [
  {
    key: 1,
    func: function () {
      console.log(this.value);
    },
    
    component: SortAlphabeticalAscending,
    value: {
      sortField: `user`,
      sortOrder: 'ASC'
    }
  },
  {
    key: 2,
    func: function () {
      console.log(this.value);

    },
    component: SortAlphabeticalDescending,
    value: {
      sortField: 'user',
      sortOrder: 'DESC'
    }
  },
  {
    key: 3,
    func: function () {
      console.log(this.value);

    },
    component: SortCalendarAscending,
    value: {
      sortField: 'Date',
      sortOrder: `ASC`
    }
  },
  {
    key: 4,
    func: function () {
      console.log(this.value);

    },
    component: SortCalendarDescending,
    value: {
      sortField: 'Date',
      sortOrder: `DESC`
    }
  }
];