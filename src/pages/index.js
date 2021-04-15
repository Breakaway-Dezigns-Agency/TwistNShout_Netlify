import * as React from "react"
import {graphql, useStaticQuery} from 'gatsby'

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Index {
      index: wpgraphql {
        page(id: "cG9zdDo4") {
          uri
          title
          content
        }
      }
    }
  `)

  const {content} = data.index.page
  return (
    <main>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </main>
  )
}

export default IndexPage
