import * as React from "react";

import {mail_btn, mail_wrapper, mail_input} from "./newsletter.module.scss";

export default function Newsletter(){
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>
                Newsletter
            </h2>
            <p style={{maxWidth: '550px', textAlign: 'center', margin: 'auto'}}>Subscribe to the newsletter to get my latest content by email. Not on any set schedule. Unsubscribe anytime.</p>

            <div className={mail_wrapper}>
                <input type="email" className={mail_input} placeholder="Enter you mail address" required />
                <button className={mail_btn}>Subscribe</button>
            </div>
        </div>
    )
}