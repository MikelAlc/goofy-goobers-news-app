export const schema = gql`
  type Weather {
    zip: String!
    status: String!
    totalResults: Int!
    articles: [String!]!

  }

  type Query {
    getWeather(zip: String!): Weather! @skipAuth
  }
`