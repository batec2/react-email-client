import React from "react";
import Email from '../email/email.component';
import './emailList.styles.css';

const EmailList = ({emails, onClick}) => {
    return (
        <ul className="email-list">
            {emails.map(email => {
                return (
                    <li onClick={(id)=> onClick(id)}>
                        <Email key={email.id} email={email} />
                    </li>
                )
            
            })}
        </ul>
    )
}

export default EmailList;