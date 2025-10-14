export type TMenuItem = {
  title: string
  icon?: string
  to?: string
  subMenu?: TMenuItem[]
}

const test: TMenuItem[] = [{
  title: "Dashboard",
  icon: "mdi-view-dashboard",
  subMenu: [
    { title: `text` },
    { title: `text` },
    { title: `text` },
    { title: `text` },
    { title: `text` },
    { title: `text` },
  ],
},]