import * as React from 'react';
import Layout from "../layout/layout";
import AboutInfo from "../sections/aboutInfo";

export default function About(){
    return(
        <Layout>
            <section className="container">
                <div className="post_content">
                    <h1 className="gradient gradient-yellow-pink">
                        Create. Share. Repeat.
                    </h1>
                    <AboutInfo />
                </div>
            </section>
        </Layout>
    )
}