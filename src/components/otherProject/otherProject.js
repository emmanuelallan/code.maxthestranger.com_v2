import * as React from "react"

import {
  projo,
  projo_inner,
  projo_top,
  folder,
  projo_link,
} from "./other_project.module.scss"

export default function OtherProject({ projos }) {
  return (
    <li className={projo}>
      <div className={projo_inner}>
        <header>
          <div className={projo_top}>
            <div className={folder}>
              <i className="ri-folder-open-line" />
            </div>
            <div className={projo_link}>
              <a href={projos.github} rel="noopener noreferrer" target="_blank">
                <i className="ri-github-line" />
              </a>
              <a
                href={projos.links.external}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="ri-external-link-fill" />
              </a>
            </div>
          </div>
          <h3>
            <a
              href={projos.links.external}
              rel="noopener noreferrer"
              target="_blank"
            >
              {projos.title}
            </a>
          </h3>

          <div dangerouslySetInnerHTML={{ __html: projos.description }} />
        </header>

        <footer>
          <ul>
            {projos.tools.map((tool) => (
              <li>#{tool}</li>
            ))}
          </ul>
        </footer>
      </div>
    </li>
  )
}
