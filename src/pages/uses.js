import * as React from 'react';
import Layout from "../layout/layout";

// import {categories} from "../data/uses";

export default function Uses(){
    return(
        <Layout>
            <section className="container">
                <div className="post_content">
                    <h1 className="gradient gradient-yellow-pink">
                        Tools. Apps. Gear.
                    </h1>
                    <div>
                        <p>I often get messages asking about specific pieces of <strong>software or hardware I use</strong>. This page is a <strong>living document</strong> with everything that I'm using nowadays.</p>
                        {/*{*/}
                        {/*    categories.map((category, index) => (*/}
                        {/*        <div key={index}>*/}
                        {/*            <h2>{category.name}</h2>*/}
                        {/*            <ul className="pl-40">*/}
                        {/*                {*/}
                        {/*                    category.items.map((item, index) => (*/}
                        {/*                        <li key={index}>*/}
                        {/*                            <a href={item.url} target="_blank">{item.title}</a>*/}
                        {/*                            <span> - </span>*/}
                        {/*                            <span>{item.description}</span>*/}
                        {/*                        </li>*/}
                        {/*                    ))*/}
                        {/*                }*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    ))*/}
                        {/*}*/}

                        <p>Coming sooner...</p>


                    </div>
                </div>
            </section>
        </Layout>
    )
}