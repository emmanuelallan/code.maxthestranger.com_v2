import * as React from 'react';
import { root, layout, main } from './layout.module.scss';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Socials from "../components/socials/socials";
import Web from "../components/web/web";

export default function Layout({ children }) {
  return (
      <div className={root}>
        <div className={layout}>
            {/* header */}
            <Header />

            {/* socials */}
            <Socials />

            {/* mail */}
            <Web />

            {/* main */}
            <main className={main}>{children}</main>

            {/* footer */}
            <Footer />
        </div>
      </div>
  )
}
