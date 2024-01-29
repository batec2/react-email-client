import React from "react";
import './email.styles.css';

const Email = ({email,onClick}) => {
    const {id,from,subject,message,time} = email;
    return (
        <div className='email-container'>
            <h2>{from}</h2>
            <p>{subject}</p>
            <p>{message}</p>
            <p>{time}</p>
        </div>
    )
}

export default Email;