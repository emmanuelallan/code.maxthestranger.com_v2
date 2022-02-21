import * as React from "react"

import {
  featured,
  prjct_content,
  overline,
  prjct_desc,
  tech_list,
  prjct_links,
  prjct_image,
  img,
} from "./featured_project.module.scss"

export default function FeaturedProjects({ project }) {
  return (
    <li className={featured}>
      <div className={prjct_content}>
        <div>
          <p className={overline}>Featured Projects</p>
          <h3>
            <a href="#link" rel="noopener noreferrer" target="_blank">
              {project.title}
            </a>
          </h3>
          <div className={prjct_desc}>
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </div>

        <ul className={tech_list}>
          {project.tools.map((tool) => (
            <li>#{tool}</li>
          ))}
        </ul>

        <div className={prjct_links}>
          <a
            href={project.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="ri-github-line" />
          </a>
          <a
            href={project.links.external}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="ri-external-link-line" />
          </a>
        </div>
      </div>

      <div className={prjct_image}>
        <a href="#link" rel="noopener noreferrer" target="_blank">
          <img src={project.imgUrl} alt="mts" className={img} />
        </a>
      </div>
    </li>
  )
}
