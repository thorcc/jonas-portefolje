import React from "react"
import { Link } from "gatsby"

import classes from '../styles/layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={classes.body}>
            <header className={classes.header}>
               <div>
                    <Link className={classes.homeLink} to="/">Jonas Ropstad</Link>
                </div> 
                <div className={classes.contactLinks}>
                    <a href="mailto:jonasropstad@gmail.com">jonasropstad@gmail.com</a>
                    <a href="https://instagram.com/jonas">Instagram</a>
                </div>
            </header>
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