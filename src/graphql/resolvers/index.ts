import merge from "lodash.merge";
import { messageResolver } from "./Message";

export const resolvers = merge(messageResolver);
