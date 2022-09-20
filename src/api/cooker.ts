import { fetch } from '@/utils/request';
import type {
  CookerQueryModel,
  CookerFetchListModel,
  CookerFetchModel,
  CookerFetchMdModel,
  Cooker
} from './models/cookerModels';

export function getList(data: CookerQueryModel) {
  return fetch<CookerFetchListModel>({
    url: '/cooker/find',
    method: 'post',
    data
  });
}

export function getCookerDetail(id: string) {
  return fetch<CookerFetchModel>({
    url: '/cooker/detail/' + id,
    method: 'post'
  });
}

export function addCooker(data: Cooker) {
  return fetch<CookerFetchModel>({
    url: '/cooker/add',
    method: 'post',
    data
  });
}

export function editorCooker(data: Cooker) {
  return fetch<CookerFetchModel>({
    url: '/cooker/editor',
    method: 'post',
    data
  });
}

export function delCooker(id: string) {
  return fetch<CookerFetchModel>({
    url: '/cooker/del',
    method: 'post',
    data: {
      id
    }
  });
}

export function generateCookerMd() {
  return fetch<CookerFetchMdModel>({
    url: '/cooker/generate',
    method: 'post'
  });
}
