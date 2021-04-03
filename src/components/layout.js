import React from "react"
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import classes from '../styles/layout.module.css'
import Header from './header';


export default function Layout({ children }) {
    return (
        <div className={classes.body}>
            <Header />
            <main className={classes.main}>
                {children}
            </main>
        </div>
    )
}