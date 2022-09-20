import { reactive, ref } from 'vue';

export interface IQuery {
  page: number;
  pageSize: number;
}

export default function () {
  const total = ref(0);
  const query = reactive<IQuery>({
    page: 1,
    pageSize: 10
  });

  return {
    total,
    query
  };
}
