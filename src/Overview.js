import React from 'react';
import { useRecoilValue } from 'recoil';
import listCountState from './recoil/listCountState';

const Overview = () => {
  const listCount = useRecoilValue(listCountState);

  return (
    <div className='overview'>
      <div>
        <label>New List:</label>
        <span>
          {listCount.newList.number}
          <i>({listCount.newList.percent})</i>
        </span>
      </div>
      <div>
        <label>In-Progress List:</label>
        <span>
          {listCount.inProgressList.number}
          <i>({listCount.inProgressList.percent})</i>
        </span>
      </div>
      <div>
        <label>Completed List:</label>
        <span>
          {listCount.completedList.number}
          <i>({listCount.completedList.percent})</i>
        </span>
      </div>
    </div>
  );
};

export default Overview;
