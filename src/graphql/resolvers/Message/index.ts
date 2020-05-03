import { IResolvers } from "apollo-server-express";
import { Message } from "../../../lib/types";

export const messageResolver: IResolvers = {
  Query: {
    helloQuery: (
      _root: undefined,
      _args: undefined,
      _ctx: undefined
    ): Message => {
      return {
        message: "Hello from Query",
        success: true,
      };
    },
  },
  Mutation: {
    helloMutation: (
      _root: undefined,
      _args: undefined,
      _ctx: undefined
    ): Message => {
      return {
        message: "Hello From Mutation",
        success: true,
      };
    },
  },
};
