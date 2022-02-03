import * as React from 'react';
import Layout from "../layouts/layout";
import AboutInfo from "../components/about/aboutInfo";

export default function About(){
    return(
        <Layout>
            <section className="wrapper">
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