import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { about_wrapper, pic_wrapper, pic } from "./about_info.module.scss"
import { tech } from "../../data/tech"

export default function AboutInfo() {
  return (
    <div className={about_wrapper}>
      <div>
        <p>
          Hello! My name is Max The Stranger and I enjoy creating things that
          live on the internet. My interest in web development started back in
          2017 when I peeked on someone's phone and saw a bunch of characters
          clustering the screen, so i thought that was cool(hacking...), I mean
          i saw nothing except the word banana, which as i now know was one of
          his variable names — I still don't understand why someone would name
          their variables banana... unless it's some banana species, but still{" "}
          <code style={{ fontFamily: "monospace" }}>bananaSpecies;</code> would
          make a good name.. just sayin!
        </p>
        <p>
          My site has no ads, no affiliate links, no tracking or analytics, no
          sponsored posts, and no paywall. My only motivation for this site is
          to share what I've learned with the world and document notes for
          myself, and hopefully connect with a few people.
        </p>
        <p>
          Check out the <Link to="/projects">projects</Link> page to see a
          highlight of the open-source projects I've made, and{" "}
          <Link to="/articles">articles</Link> to see everything.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul class="skills-list">
          {tech.map((t) => (
            <li>{t.title}</li>
          ))}
        </ul>
      </div>
      <div className={pic_wrapper}>
        <div className={pic}>
          <StaticImage
            src="../../images/mts.jpeg"
            alt="mts"
            width={300}
            height={268}
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </div>
    </div>
  )
}
