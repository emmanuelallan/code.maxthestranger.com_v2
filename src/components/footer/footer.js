import * as React from 'react';
import {footer, footer_socials, footer_credit, github_stats, mail_btn} from './footer.module.scss';
import {useEffect, useState} from "react";
import {socials_links} from "../../data/socials";

export default function Footer(){
    const [user, setUser] = useState({})

    useEffect(() => {
        let didCancel = false;

        async function fetchMyAPI() {
            let url = 'https://api.github.com/users/maxthestranger';
            const response = await fetch(url).then(res => res.json()).catch(e => console.log(e));
            if (!didCancel) { // Ignore if we started fetching something else
                setUser({...response})
            }
        }

        fetchMyAPI();
        return () => { didCancel = true; }; // Remember if we start fetching something else
    }, []);


    return(
        <footer className={footer}>
            <div className={footer_socials}>
                <ul>
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
            <div className={footer_credit}>
                <div>Designed &amp; Built by Max The Stranger</div>
                <a href="jjj.com" target="_blank" rel="noopener noreferrer" className={mail_btn}>
                    <span>
                        Buy me a coffee ☕
                    </span>
                </a>
                <div className={github_stats}>
                    <span>
                        <i className="ri-shield-user-line" />
                        <span>{user?user['followers']: ''}</span>
                    </span>
                    <span>
                        <i className="ri-git-repository-line" />
                        <span>{user?user['public_repos']: ''}</span>
                    </span>
                </div>
            </div>
        </footer>
    )
}