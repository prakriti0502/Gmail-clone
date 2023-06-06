import React from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';

const EmailList = ({emails}) => {
  return (
    <div className='email-list'>
        {emails?.map((email) => (
          <EmailRow
          email={email}
            key={email?.id}
          />
        ))}
    </div>
  )
}

export default EmailList