import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { newListState } from './recoil/listState';

const NewActionInput = () => {
  const addNewTodo = useSetRecoilState(newListState);
  const [text, setText] = useState('');

  const handleAddNewAction = () => {
    if (!text) {
      return;
    }

    addNewTodo(text);
    setText('');
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='action-input'>
      <input
        type='text'
        placeholder='Enter new to-do action'
        value={text}
        onChange={handleChangeText}
      />

      <button onClick={handleAddNewAction}>Add</button>
    </div>
  );
};

export default NewActionInput;
