// src/shared/lib/url/updateUrl.ts
import VueRouter, { Route } from "vue-router";

export const updateUrl = (
  queryParams: Record<string, string | number | null | undefined>,
  route: Route,
  router: VueRouter
) => {
  const query = { ...route.query };
  Object.entries(queryParams).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') {
      delete query[key];
    } else {
      query[key] = String(value);
    }
  });
  return router.replace({ query }).catch(() => { });
};
