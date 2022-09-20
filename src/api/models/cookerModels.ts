import type { BasePageParams, BaseFechResultList, BaseFechResultItem } from './baseModel';

export interface Cooker {
  id?: string;
  sort: string;
  brand: string;
  name: string;
  price: string;
  url: string;
  pic: string;
  wind: string;
  fire: string;
  pa: string;
  describe: string[];
  createTime?: number;
}

export type CookerQueryModel = BasePageParams<Partial<Cooker>>;
export type CookerFetchListModel = BaseFechResultList<Cooker>;
export type CookerFetchModel = BaseFechResultItem<Cooker>;
export type CookerFetchMdModel = BaseFechResultItem<string>;
