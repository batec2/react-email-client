import React from "react";
import { IconTrash,IconMail } from "@tabler/icons-react";
import './sizebar.styles.css';

const SideBar = () => {
    return (
        <div className='side-bar-container'>
            <IconMail size={50}/>
            <IconTrash size={50}/>
        </div>
    )
}

export default SideBar;