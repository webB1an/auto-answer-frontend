import Cookies from 'js-cookie';

export function CookiesSet(name: string, value: string): void {
  Cookies.set(name, value);
}

export function CookiesGet(name: string): string {
  return Cookies.get(name) || '';
}

export const setBooleanStorage = (key: string, value: boolean) =>
  localStorage.setItem(key, String(value));

export const getBooleanStorage = (key: string) =>
  localStorage.getItem(key) === 'true' ? true : false;
