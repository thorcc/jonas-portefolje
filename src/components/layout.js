import React from "react"

import classes from '../styles/layout.module.css'
import Header from './header';


export default function Layout({ children }) {
    return (
        <div className={classes.body}>
            <Header />
            <main className={classes.main}>
                {children}
            </main>
            <footer className={classes.footer}>
                <hr></hr>
                <p>designet av <a href="https://github.com/thorcc">thorcc</a></p>
            </footer>
        </div>
    )
}