import * as React from 'react';
import { root, layout, content, main, blur } from './layout.module.scss';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Socials from "../components/socials/socials";
import Mail from "../components/mail/mail";
import {useState} from "react";

export default function Layout({ children }) {
    const [open, setOpen] = useState(false)

    function handleClick(){
        setOpen(() => !open)
    }

  return (
      <div className={root}>
        <div className={layout}>
            {/* header */}
            <Header open={open} handleClick={handleClick} />

            {/* socials */}
            <Socials />

            {/* mail */}
            <Mail />

            {/* main */}
            <div className={`${content} ${open ? blur : ''}`}>
                <main className={main}>{children}</main>
                {/* footer */}
                <Footer />
            </div>
        </div>
      </div>
  )
}
