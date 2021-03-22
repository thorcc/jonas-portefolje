import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import classes from "../styles/picture.module.css"

export default function Picture({ data }) {
    const pic = data.contentfulPicture;
  return (
    <Layout>
      <div className={classes.picture}>
        <h1>{pic.title}</h1>
        <img src={pic.picture.file.url} alt={pic.title} />
      </div>
    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        contentfulPicture(slug: {eq: $slug}) {
            title
            picture {
              file {
                url
              }
            }
        }
    }
`