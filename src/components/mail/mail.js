import * as React from 'react';

import {web, email} from './mail.module.scss';

export default function Mail(){
    return(
        <div className={web}>
            <div className={email}>
                <a href="mailto:thestrangermax@gmail.com">thestrangermax@gmail.com</a>
            </div>
        </div>
    )
}