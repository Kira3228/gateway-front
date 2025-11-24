import { defineStore } from "pinia";
import { TBreadcrumb } from "./types";

interface IBreadcrumbsState {
  breadcrumbs: TBreadcrumb[]
}

export const useBreadcrumbsStore = defineStore(`breadcrumbs-store`, {
  state: (): IBreadcrumbsState => ({ breadcrumbs: [] }),

  actions: {
    setBreadcrumbs(newBreadcrumb: TBreadcrumb) {
      const exists = this.breadcrumbs.some(b => b.to === newBreadcrumb.to)
      if (!exists) {
        this.breadcrumbs = [...this.breadcrumbs, newBreadcrumb]
      }
    },
    reset() {
      this.breadcrumbs = []
    },
    remove(index: number) {
      this.breadcrumbs = this.breadcrumbs.slice(0, index + 1)
    }
  }
})