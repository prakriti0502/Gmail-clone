import React from 'react';
import './Sidebar.css'
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import NoteIcon from '@mui/icons-material/Note';
import WarningIcon from '@mui/icons-material/Warning';
import DeleteIcon from '@mui/icons-material/Delete';
import AllInboxIcon from '@mui/icons-material/AllInbox';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Button className='compose' startIcon={<EditIcon fontSize='large'/>}>Compose</Button>
        <SidebarOption Icon={AllInboxIcon} title="All Mail" tag="all"/>
        <SidebarOption Icon={InboxIcon} title="Inbox" tag="inbox"/>
        <SidebarOption Icon={NoteIcon} title="Drafts" tag="draft"/>
        <SidebarOption Icon={WarningIcon} title="Spam" tag="spam"/>
        <SidebarOption Icon={DeleteIcon} title="Trash" tag="trash"/>
    </div>
  )
}

export default Sidebar