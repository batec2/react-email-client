import React from "react";
import './emailBody.styles.css';

const EmailBody = ({ email }) => {
    const {address,from,message,subject} = email;
    return (
        <div className='email-body-container'>
            <div className='from-container'>
                <p className='from'>{from}</p>
            </div>
            <div className='address-container'>
                <p className='address'>{address}</p>
            </div>
            <div className='subject-container'>
                <p className='subject'>{subject}</p>
            </div>
            <div className='message-container'>
                <p className='message'>{message}</p>    
            </div>
        </div>
    )
}

export default EmailBody;