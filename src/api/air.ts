import { fetch } from '@/utils/request';
import type {
  AirQueryModel,
  AirFetchListModel,
  AirFetchModel,
  AirFetchMdModel,
  Air
} from './models/airModels';

export function getList(data: AirQueryModel) {
  return fetch<AirFetchListModel>({
    url: '/air/find',
    method: 'post',
    data
  });
}

export function getAirDetail(id: string) {
  return fetch<AirFetchModel>({
    url: '/air/detail/' + id,
    method: 'post'
  });
}

export function addAir(data: Air) {
  return fetch<AirFetchModel>({
    url: '/air/add',
    method: 'post',
    data
  });
}

export function editorAir(data: Air) {
  return fetch<AirFetchModel>({
    url: '/air/editor',
    method: 'post',
    data
  });
}

export function delAir(id: string) {
  return fetch<AirFetchModel>({
    url: '/air/del',
    method: 'post',
    data: {
      id
    }
  });
}

export function generateAirMd() {
  return fetch<AirFetchMdModel>({
    url: '/air/generate',
    method: 'post'
  });
}
