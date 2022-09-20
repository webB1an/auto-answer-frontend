export interface BasePageParams<T> {
  pageSize: number;
  page: number;
  requestData: T;
}

export interface BaseFechResultItem<T> {
  code: number;
  msg: string;
  data: T;
}

export interface BaseFechResultList<T> {
  code: string;
  msg: string;
  data: {
    total: number;
    list: T[];
  };
}
