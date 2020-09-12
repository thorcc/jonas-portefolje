import React from "react"
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from "../components/layout"

export default function Picture({ data }) {
    const pic = data.contentfulPicture;
  return (
    <Layout>
      <h1>{pic.title}</h1>
      <img src={pic.picture.file.url} alt={pic.title} />
      {documentToReactComponents(pic.description.json)}

    </Layout>
  )
}

export const query = graphql`
    query($slug: String!) {
        contentfulPicture(slug: {eq: $slug}) {
            title
            description {
              json
            }
            picture {
              file {
                url
              }
            }
        }
    }
`