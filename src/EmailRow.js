import React from 'react';
import { useDispatch } from "react-redux";
import './EmailRow.css';
import { useNavigate } from 'react-router-dom';
import { selectMail } from './reducers/emailReducer';

const EmailRow = ({email}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
              ...email
            })
          );
          navigate('/mail');
    }
  return (
    <div onClick={openMail} className='email-row'>
        <div className='user-id'>
            {email?.userId}
        </div>
        <div className='message'>
            <h4>{email?.subject}</h4>
        </div>
    </div>
  )
}

export default EmailRow