import React from "react";
import Email from '../email/email.component';
import './emailList.styles.css';

const EmailList = ({emails, onClick}) => {
    return (
        <ul className="email-list">
            {emails.map(email => {
                return (
                    <li key={email.id}  onClick={()=> onClick(email.id)}>
                        <Email email={email} />
                    </li>
                )
            
            })}
        </ul>
    )
}

export default EmailList;