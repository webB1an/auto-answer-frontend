import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';
import { CustomLoading } from '@/components/Loading';

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API
});

let requestTimes = 0;

function startLoading() {
  if (requestTimes === 0) {
    CustomLoading.show({ text: '加载中...' });
  }
  requestTimes++;
}

function shutDownLoading() {
  CustomLoading.close();
}

function endLoading() {
  requestTimes--;
  if (requestTimes <= 0) {
    shutDownLoading();
  }
}

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    startLoading();
    return config;
  },
  (error) => {
    shutDownLoading();
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    /*const res = response.data
    if (!res.code) {
      return res
    } else {
      if (res.code === '90001') {
        return res
      } else {
        return Promise.reject(res)
      }
    }*/
    endLoading();
    return response;
  },
  (error) => {
    shutDownLoading();
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 50000
    });
    return Promise.reject(error);
  }
);

interface Result<T = any> {
  code: number;
  msg: string;
  result: T;
}

export function fetch<T>(opts: AxiosRequestConfig): Promise<T> {
  return new Promise((resolve, reject) => {
    service
      .request<any, AxiosResponse<Result>>(opts)
      .then((response: AxiosResponse<Result>) => {
        const res = response.data as unknown as Promise<T>;
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default service;
