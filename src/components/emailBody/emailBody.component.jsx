import React from "react";
import './emailBody.styles.css';

const EmailBody = ({ email }) => {
    const {address,from,message,subject} = email;
    return (
        <div className='email-body-container'>
            <p>{from}</p>
            <p>{address}</p>
            <p>{subject}</p>
            <p>{message}</p>
        </div>
    )
}

export default EmailBody;