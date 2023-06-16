export const schema = gql`
  type Weather {
    zip: String!
    city: String!
    conditions: String!
    temp: Int!
  }

  type Query {
    getWeather(zip: String!): Weather! @skipAuth
  }
`