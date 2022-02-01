import * as React from 'react';
import Layout from "../layout/layout";

export default function Articles(){
    return(
        <Layout>
            <section className="container">
                <div className="post_content">
                    <h1 className="gradient gradient-cyan-green">
                        Stories. Updates. Guides.
                    </h1>
                    <div>
                        <p>Here you can find all the <strong>188 articles</strong> I wrote. You can read about web development, software engineering, and tech career in both English and Portuguese.</p>
                        <h2>Featured Articles</h2>
                        <p>Coming Soon...</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}