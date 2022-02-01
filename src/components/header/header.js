import * as React from 'react';
import {Link} from 'gatsby';
import {header, nav, logo, nav_link, resume, menu, sidebar, menu_sidebar,menu_hamburger, hambox, hambox_inner, resume_link}  from './header.module.scss';

import logoFile from '../../images/logo.svg';
import resumeFile from '../../images/resume.pdf';
import {nav_links} from "../../data/nav";
export default function Header(){
    return(
        <header className={`${header}`}>
            <nav className={nav}>
                <div className={logo}>
                    <Link to="/">
                        <img src={logoFile} alt="logo" />
                    </Link>
                </div>
                <div className={nav_link}>
                    <ul>
                        {
                            nav_links.map((links, index) => (
                                <li key={index}>
                                    <Link to={`/${links.name}`}>
                                        {links.name}
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
                    <div className={resume}>
                        <a href={resumeFile} target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </div>
                </div>

                <div className={menu}>
                    <div>
                        <button aria-label="menu" className={menu_hamburger}>
                            <div className={hambox}>
                                <div className={hambox_inner} />
                            </div>
                        </button>

                        <aside aria-hidden="true" className={menu_sidebar}>
                            <nav className={sidebar}>
                                <ul>
                                    {
                                        nav_links.map((links, index) => (
                                            <li key={index}>
                                                <Link to={`/${links.name}`}>
                                                    {links.name}
                                                </Link>
                                            </li>
                                        ))
                                    }

                                </ul>

                                <a href={resumeFile} target="_blank" rel="noopener noreferrer" className={resume_link}>
                                    Resume
                                </a>
                            </nav>
                        </aside>
                    </div>
                </div>
            </nav>
        </header>
    )
}
