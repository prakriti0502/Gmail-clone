import React from 'react';
import './Mail.css';
import { useSelector } from "react-redux";
import { selectOpenMail } from './reducers/emailReducer';

const Mail = () => {
    const selectedMail = useSelector(selectOpenMail);
  return (
    <div className='mail'>
        <div className='header'>
            <h4>User id: {selectedMail?.userId}</h4>
            <h4>{selectedMail?.subject}</h4>
        </div>
        <div className='mail-msg'>
            {selectedMail.body}
        </div>
    </div>
  )
}

export default Mail