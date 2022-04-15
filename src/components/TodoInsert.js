import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';
import '../styles/TodoInsert.scss';

function TodoInsert(props) {
    return (
        <form className='TodoInsert'>
            <input placeholder='할 일을 입력하세요' 
            value={value} 
            onChange={onChange} />
            <button type='submit'><MdAdd /></button>
        </form>
    );
}

export default TodoInsert;