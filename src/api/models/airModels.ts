import type { BasePageParams, BaseFechResultList, BaseFechResultItem } from './baseModel';

export interface Air {
  id?: string;
  sort: string;
  brand: string;
  type: string;
  price: string;
  power: string;
  quality: string;
  url: string;
  describe: string[];
  createTime?: number;
}

export type AirQueryModel = BasePageParams<Partial<Air>>;
export type AirFetchListModel = BaseFechResultList<Air>;
export type AirFetchModel = BaseFechResultItem<Air>;
export type AirFetchMdModel = BaseFechResultItem<string>;
