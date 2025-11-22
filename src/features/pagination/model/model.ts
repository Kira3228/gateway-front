import { useRoute, useRouter } from "vue-router/composables";

export const usePagination = () => {
  const router = useRouter();
  const route = useRoute();
  const handlePaginationClick = async (newPage: number) => {
    await router.push({
      path: route.path,
      query: {
        ...route.query,
        page: newPage.toString(),
      },
    });
  };
  return {
    handlePaginationClick
  }
}