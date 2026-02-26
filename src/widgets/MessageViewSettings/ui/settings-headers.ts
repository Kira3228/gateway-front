import { Header } from "@/shared-ui/src/components/DataTable";

export const settingsHeaders: Header[] = [
  {
    text: "",
    value: "drag",
    sortable: false,
    width: 30,
    align: "center",
    isVisible: true,
  },
  {
    text: `Поле`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `text`,
    width: 200,
  },
  {
    text: `Видимость`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `isVisible`,
    width: 30,
  },
  {
    text: `Cортируемый`,
    align: "start",
    isVisible: true,
    sortable: false,
    value: `sortable`,
    width: 30,
  },

];