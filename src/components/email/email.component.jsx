import React from "react";
import './email.styles.css';

const Email = ({email}) => {
    const {from,subject,message,time} = email;
    return (
        <div className='email-container'>
            <h1>{from}</h1>
            <h1>{subject}</h1>
            <h1>{message}</h1>
            <h1>{time}</h1>
        </div>
    )
}

export default Email;