import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Message {
    message: String!
    success: Boolean!
  }

  type Query {
    helloQuery: Message!
  }

  type Mutation {
    helloMutation: Message!
  }
`;
