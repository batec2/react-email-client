import React from "react";
import './email.styles.css';

const Email = ({email}) => {
    const {from,subject,time,read} = email;

    return (
        <div className={read==='true'?'email-container-read':'email-container-unread'}>
            <div className='name-date-container'>
                <h2 className='from'>{from}</h2>
                <p className='time'>{time}</p>
            </div>
            <p>{subject}</p>
        </div>
    )
}

export default Email;