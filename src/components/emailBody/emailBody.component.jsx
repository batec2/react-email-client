import React from "react";
import './emailBody.styles.css';

const EmailBody = ({ email }) => {
    const {address,from,message,subject} = email;
    return (
        <div className='email-body-container'>
            <p>this is a test</p>
        </div>
    )
}

export default EmailBody;