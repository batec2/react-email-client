import React from "react";
import { IconTrash,IconMail } from "@tabler/icons-react";
import './sizebar.styles.css';

const SideBar = ({onInbox,onTrash}) => {
    return (
        <div className='side-bar-container'>
            <div className='mail-container' onClick={()=>onInbox()}>
                <IconMail size={50}/>
            </div>
            <div className='trash-container' onClick={()=>onTrash()}>
                <IconTrash size={50}/>
            </div>
        </div>
    )
}

export default SideBar;