export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    general: Boolean!
    business: Boolean!
    entertainment: Boolean!
    health: Boolean!
    science: Boolean!
    sports: Boolean!
    technology: Boolean!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    name: String!
    email: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    general: Boolean!
    business: Boolean!
    entertainment: Boolean!
    health: Boolean!
    science: Boolean!
    sports: Boolean!
    technology: Boolean!
  }

  input UpdateUserInput {
    name: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    general: Boolean
    business: Boolean
    entertainment: Boolean
    health: Boolean
    science: Boolean
    sports: Boolean
    technology: Boolean
  }

  input UpdateCategories{
    general: Boolean
    business: Boolean
    entertainment: Boolean
    health: Boolean
    science: Boolean
    sports: Boolean
    technology: Boolean
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    updateCategories(id: Int!, input: UpdateCategories!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
