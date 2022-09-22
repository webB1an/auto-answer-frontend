type SortValues = 1 | 2 | 3 | 4;

interface Sorts {
  label: string;
  value: SortValues;
}

export const sortOpts: Sorts[] = [
  {
    label: '蒸箱款',
    value: 1
  },
  {
    label: '烤箱款',
    value: 2
  },
  {
    label: ' 消毒柜款',
    value: 3
  },
  {
    label: '蒸烤一体款',
    value: 4
  }
];

export const getOptLabel = (value: SortValues) =>
  sortOpts.find((item) => item.value === value)!.label;
