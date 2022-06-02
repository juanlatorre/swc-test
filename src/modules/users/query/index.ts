import { Resolvers } from "../../../types.generated.js";
import user from "./user.js";
import users from "./users.js";

const query: Resolvers = {
  Query: {
    user,
    users,
  },
};

export default query;
