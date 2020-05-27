import { selector } from 'recoil';
import {
  newListState,
  inprogressListState,
  completedListState,
} from './listState';

const listCountState = selector({
  key: 'listCount',
  get: ({ get }) => {
    const newList = get(newListState);
    const inProgressList = get(inprogressListState);
    const completedList = get(completedListState);
    const total = newList.length + inProgressList.length + completedList.length;

    return {
      newList: {
        number: newList.length,
        percent: total !== 0 ? (newList.length / total) * 100 + '%' : '',
      },
      inProgressList: {
        number: inProgressList.length,
        percent: total !== 0 ? (inProgressList.length / total) * 100 + '%' : '',
      },
      completedList: {
        number: completedList.length,
        percent: total !== 0 ? (completedList.length / total) * 100 + '%' : '',
      },
    };
  },
});

export default listCountState;
