import * as React from "react"
import { Link } from "gatsby"

import { hero } from "./hero.module.scss"
import mts from "../../images/mts.svg"

export default function Hero() {
  return (
    <div className={hero}>
      <div>
        <div style={{ transitionDelay: "100ms" }}>
          <p>
            <strong>👋 Hi, my name is</strong>
          </p>
        </div>
        <div style={{ transitionDelay: "200ms" }}>
          <h1>Max The Stranger</h1>
        </div>
        <div style={{ transitionDelay: "300ms" }}>
          <p>
            <strong>I'm a software engineer in Nairobi.</strong>
            <br />I love building open-source{" "}
            <Link to="/projects">projects</Link> and{" "}
            <Link to="/articles">writing</Link> about what I learn. This website
            is my digital garden—a compendium of the things I've learned and
            created.
            <br />
            <span
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <i
                className="ri-information-line"
                style={{ marginRight: "5px" }}
              />
              <Link to="/about">More about Me</Link>
            </span>
          </p>
        </div>
      </div>

      <img src={mts} alt="max the stranger" />
    </div>
  )
}
