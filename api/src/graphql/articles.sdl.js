export const schema = gql`
  type Articles {
    totalResults: Int!
    articles: [Article!]
  }

  type Article {
    author: String
    description: String
    publishedAt: String!
    title: String!
    content: String
    urlToImage: String
  }

  type Query {
    getArticles(zip: String!): Articles! @skipAuth
  }
`