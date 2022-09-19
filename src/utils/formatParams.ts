import { pickBy } from 'lodash-es';

export interface Obj {
  [propName: string]: any;
}

interface Opt {
  label: string;
  value: number;
}

export function formatParams(params: Obj) {
  return pickBy(params);
}

export function emptyObjKeys(params: Obj) {
  for (const key in params) {
    params[key] = '';
  }
}

export function enum2Opt(data: Obj): Opt[] {
  const opt: Opt[] = [];

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'number') {
      opt.push({ label: key, value });
    }
  });
  return opt;
}
