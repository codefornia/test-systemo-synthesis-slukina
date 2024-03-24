import { ratesOptionType } from '@features/gameBoard/model/types';

export const availableRates = [1, 5, 10, 15, 20];

export const rateValueSpecific = 'specific';
export const ratesOptions: ratesOptionType[] = [
  {
    id: 'even',
    title: 'Четное',
    value: [2, 4, 6],
  },
  {
    id: 'odd',
    title: 'Нечетное',
    value: [1, 3, 5],
  },
  {
    id: '1to3',
    title: 'От 1 до 3',
    value: [1, 2, 3],
  },
  {
    id: '4to6',
    title: 'От 4 до 6',
    value: [4, 5, 6],
  },
  {
    id: 'specific',
    title: 'Конкретное число',
    value: rateValueSpecific,
  },
];
