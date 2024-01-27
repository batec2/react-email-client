import React from "react";
import Email from '../email/email.component';
import './emailList.styles.css';

const EmailList = ({emails}) => {
    
    return (
        <div className="EmailList">
            {emails.map(email => (
                <Email key={email.id} email={email} />
            ))}
        </div>
    )
}

export default EmailList;