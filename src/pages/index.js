import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import classes from '../styles/index.module.css';

import Layout from "../components/layout"

export default function Home({ data }) {

  const aboutTexts = data.allContentfulAbout.edges.map((aboutText) => aboutText.node);
  const about = aboutTexts.map(text => (
    <>
      {documentToReactComponents(text.aboutText.json)}
    </>
  ))
  let leftPics = []
  let rightPics = []
  data.allContentfulPicture.edges.forEach(function (pic, i) {
    const picLink = <Link className={classes.picture}
      to={pic.node.slug}
      >
        <img src={pic.node.picture.file.url  + "?fm=jpg&q=50"} alt={pic.node.picture.title} />
      </Link>;
    i % 2 === 0 ? leftPics.push(picLink) : rightPics.push(picLink);
  });

  return (
    <Layout>
      <div className={classes.about}>
        {about}
      </div>
      <div className={classes.pictureGrid}>
        <div>{leftPics}</div>
        <div>{rightPics}</div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allContentfulAbout {
    edges {
      node {
        aboutText {
          json
        }
      }
    }
  }
  allContentfulPicture {
    edges {
      node {
        slug
        picture {
          file {
            url
          }
          title
        }
      }
    }
  }
}
`