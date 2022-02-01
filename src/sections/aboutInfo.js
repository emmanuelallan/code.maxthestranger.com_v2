import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {Link} from 'gatsby';

import {inner, styledText, styledPic, wrapper} from './aboutInfo.module.scss';
// import mts from '../images/mts.jpeg';

export default function AboutInfo(){
    return(
        <div className={inner}>
            <div className={styledText}>
                <p>Hello! My name is Max The Stranger and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!</p>
                <p>
                    My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My only motivation for this site is to share what I've learned with the world and document notes for myself, and hopefully connect with a few people.
                </p>
                <p>
                    Check out the <Link to="/projects">projects</Link> page to see a highlight of the open-source projects I've made, and <Link to="/articles">articles</Link> to see everything I've written. I've also written external publications for DigitalOcean, Envato Tuts+, etc. and done a few speaking engagements and podcasts, which you can find below.
                </p>
            </div>
            <div className={styledPic}>
                <div className={wrapper}>
                    <StaticImage src="../images/mts.jpeg" alt="mts" width={300} height={268} placeholder="blurred" layout="fixed" />
                </div>
            </div>
        </div>
    )
}