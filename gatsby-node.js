const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
 
    const result = await graphql(`
      query {
        allContentfulPicture {
            edges {
              node {
                slug
              }
            }
        }
      }
    `)
    console.log(JSON.stringify(result, null, 4))

    result.data.allContentfulPicture.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/picture.js`),
          context: {
            slug: node.slug,
          },
        })
      })
  }