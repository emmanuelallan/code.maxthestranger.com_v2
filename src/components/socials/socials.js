import * as React from 'react';
import {socials, social_list} from './socials.module.scss';

import {socials_links} from "../../data/socials";

export default function Socials(){
    return(
        <div className={socials}>
            <ul className={social_list}>
                {
                    socials_links.map((link, index) => (
                        <li key={index}>
                            <a href={link.link} aria-label={link.name} target="_blank" rel="noreferrer">
                                <i className={link.icon} />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}