import * as React from 'react';

import { useState } from 'react'
import { motion } from 'framer-motion'
import readingTime from 'reading-time'
import * as styles from './featured.module.scss';

export default function FeaturedArticle(props) {
    const stats = readingTime(props.content);

    return <a
        className={styles.featured_article_item}
        href={props.href}
    >
        <Animation index={props.index}>
            <div className={styles.featured_article_container}>
                <div
                    className={styles.featured_article_img}
                    style={{ backgroundImage: `url(${props.image})` }}
                />
                <div className={styles.featured_article_content}>
                    <h3>{props.title}</h3>
                    <p className={styles.featured_article_description}>{props.description}</p>
                    <p className={styles.featured_article_stats}>{stats.text}</p>
                </div>
            </div>
        </Animation>
    </a>
}

function Animation(props) {
    const [hovered, setHovered] = useState('')
    const isHovered = hovered === props.index

    return <motion.div
        onHoverStart={() => setHovered(props.index)}
        onHoverEnd={() => setHovered('')}
        className={styles.featured_article_anim}
    >
        {isHovered &&
            <motion.div
                layoutId="featuredArticles"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.featured_article_anim_hovered}
            />
        }

        {props.children}
    </motion.div>
}