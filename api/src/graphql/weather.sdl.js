export const schema = gql`
  type Weather {
    totalResults: Int!
    articles: [Article!]
  }

  type Article {
    author: String
    description: String
    publishedAt: String!
    title: String!
  }

  type Query {
    getWeather(zip: String!): Weather! @skipAuth
  }
`