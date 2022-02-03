import * as React from 'react';
import {Link} from "gatsby";
import Layout from "../layouts/layout";

import {posts} from "../data/articles";

import Hero from "../components/hero/hero";
import ListItem from "../components/listItem/listItem";
import Newsletter from "../components/newsletter/newsletter";

// markup
const IndexPage = () => {
  return (
    <Layout>
        <section className="wrapper">
            <div className="post_content">
                <Hero />

                <div className="flex_between pt_4">
                    <h2>Latest Articles</h2>
                    <Link to="/blog">
                        Visit my Blog
                    </Link>
                </div>

                <ul className="item_list">
                    {
                        posts.map((post, index) => (
                            <ListItem key={index} href={post.href} title={post.title} date={post.date} index={index} />
                        ))
                    }
                </ul>

                <div className="pt_4 pb_4">
                    <Newsletter />
                </div>
            </div>
        </section>
    </Layout>
  );
};

export default IndexPage;
