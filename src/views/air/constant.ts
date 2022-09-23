type SortValues = 1 | 2;

interface Sorts {
  label: string;
  value: SortValues;
}

export const sortOpts: Sorts[] = [
  {
    label: '挂式',
    value: 1
  },
  {
    label: '柜式',
    value: 2
  }
];

export const getOptLabel = (value: SortValues) =>
  sortOpts.find((item) => item.value === value)!.label;
