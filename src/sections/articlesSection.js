import * as React from 'react';

import {featured_articles, featured_articles_item, anim_hover, desc, featured_article_anim, con, con_img, article_content} from './articles.module.scss';

export default function ArticlesSection(){
    return(
        <div className={featured_articles}>
            <a className={featured_articles_item} href="/article">
                <div className={featured_article_anim}>
                    <div className={anim_hover} />
                    <div className={con}>
                        <div className={con_img} style={{backgroundImage: 'url("../images/post1.jpg")'}} />
                        <div className={article_content}>
                            <h3>
                                The technology stack I used to build my first mobile app
                            </h3>
                            <p className={desc}>
                                In January 2nd, I decided to build my first mobile app just for fun. Three weeks later, the MVP was done and available to users in the App Store and Play Store. It's been 6 months since I started that journey and today I decided to share the technology stack that helped me get here.
                            </p>
                            <p>4 min read</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}