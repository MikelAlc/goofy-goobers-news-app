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
    url: String
    category: String
  }

  type Query {
    getArticles(criteria: String!, pageNumber: Int!): Articles! @skipAuth
  }
`