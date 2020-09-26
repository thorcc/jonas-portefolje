import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import classes from "../styles/header.module.css"

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query {
            allContentfulTopLink {
                edges {
                    node {
                        url
                        text
                    }
                }
            }
        }
      `}
      render={data => (
        <header className={classes.header}>
          <div>
            <Link className={classes.homeLink} to="/">
              Jonas Ropstad
            </Link>
          </div>
          <div className={classes.contactLinks}>
              {data.allContentfulTopLink.edges.map(link => (
                  <a href={link.node.url}>{link.node.text}</a>
              ))}
          </div>
        </header>
      )}
    />
  )
}

/*
            <header className={classes.header}>
               <div>
                    <Link className={classes.homeLink} to="/">Jonas Ropstad</Link>
                </div> 
                <div className={classes.contactLinks}>
                    <a href="mailto:jonasropstad@gmail.com">jonasropstad@gmail.com</a>
                    <a href="https://instagram.com/jonas">Instagram</a>
                </div>
            </header>
*/
