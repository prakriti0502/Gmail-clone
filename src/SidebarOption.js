import React from 'react';
import './SidebarOption.css';
import { filterEmails } from './reducers/allMailsReducer';
import { useDispatch } from "react-redux";

const SidebarOption = ({ Icon, title, tag }) => {
    const dispatch = useDispatch(); 
    const handleClick = () => {
        dispatch(filterEmails(tag));
    }
  return (
    <div onClick={handleClick} className="sidebar-option">
        <Icon/>
        <h3>{title}</h3>
    </div>
  )
}

export default SidebarOption