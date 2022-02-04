import * as React from "react"
import { Link } from "gatsby"
import {
  header,
  active,
  nav,
  logo,
  nav_link,
  resume,
  menu,
  sidebar,
  menu_sidebar_open,
  menu_sidebar_closed,
  menu_hamburger_open,
  hambox,
  hambox_inner_open,
  hambox_inner_closed,
  resume_link,
} from "./header.module.scss"

import logoFile from "../../images/logo.svg"
import resumeFile from "../../images/resume.pdf"
import { nav_links } from "../../data/nav"

export default function Header({ open, handleClick }) {
  return (
    <header className={`${header}`}>
      <nav className={nav}>
        <div className={logo}>
          <Link to="/">
            <img src={logoFile} alt="logo" />
          </Link>
        </div>
        <div className={nav_link}>
          <ul>
            {nav_links.map((links, index) => (
              <li key={index}>
                <Link to={`/${links.name}`} activeClassName={active}>
                  {links.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className={resume}>
            <a href={resumeFile} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className={menu}>
          <div>
            <button
              onClick={handleClick}
              aria-label="menu"
              className={menu_hamburger_open}
            >
              <div className={hambox}>
                <div
                  className={open ? hambox_inner_open : hambox_inner_closed}
                />
              </div>
            </button>

            <aside
              aria-hidden="true"
              className={open ? menu_sidebar_open : menu_sidebar_closed}
            >
              <nav className={sidebar}>
                <ul>
                  {nav_links.map((links, index) => (
                    <li key={index}>
                      <Link to={`/${links.name}`}>{links.name}</Link>
                    </li>
                  ))}
                </ul>

                <a
                  href={resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={resume_link}
                >
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
