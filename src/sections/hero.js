import * as React from 'react';
import {Link} from 'gatsby';
import {hero, flex_content, mailInfo, latest_article, mailList, list_item_link, mail_btn, list_item_title, list_item_date, list_item_link_hovered} from './hero.module.scss';

import mts from '../images/mts.svg';
import {articles} from "../data/articles";

// markup
const Hero = () => {
    return (
        <section className={hero}>
            <div className={flex_content}>
                <div>
                    <div style={{transitionDelay: '100ms'}}>
                        <h1>👋 Hi, my name is</h1>
                    </div>
                    <div style={{transitionDelay: '200ms'}}>
                        <h2>Max The Stranger</h2>
                    </div>
                    <div style={{transitionDelay: '300ms'}}>
                        <p>
                            <strong>I'm a software engineer in Nairobi.</strong>
                            <br />
                            I love building open-source <Link to="/projects">projects</Link> and <Link to="/articles">writing</Link> about what I learn.
                            This website is my digital garden—a compendium of the things I've learned and created over the years.
                            <br />
                            <span style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                                <i className="ri-information-line" style={{marginRight: '5px'}} />
                                <Link to="/about">
                                 More about Me
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>

                <img src={mts} alt="max the stranger" />
            </div>

            <div className={latest_article}>
                <h2>
                    Latest Articles
                    <Link to="/blog">
                        Visit my Blog
                    </Link>
                </h2>
                <ul>
                    {
                        articles.map((article, index) => (
                            <li key={index}>
                                <Link to="/blog">
                                    <span className={list_item_link}>
                                        <span className={list_item_link_hovered} />
                                        <span className={list_item_title}>{article.title}</span>
                                        <span className={list_item_date}>
                                            <time dateTime="2021-11-11">{article.pubDate}</time>
                                        </span>
                                    </span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className={latest_article}>
                <h2 style={{justifyContent: 'center'}}>
                    Get In Touch
                </h2>

                <div className={mailInfo}>
                    <input type="email" className={mailList} placeholder="Enter you mail address" required />
                    <button className={mail_btn}>Subscribe</button>
                </div>
            </div>

            <div className={latest_article}>

            </div>
        </section>
    );
};

export default Hero;
