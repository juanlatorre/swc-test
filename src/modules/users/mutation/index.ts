import { Resolvers } from "../../../types.generated.js";
import createUser from "./create-user.js";
import deleteUser from "./delete-user.js";
import updateUser from "./update-user.js";

const mutation: Resolvers = {
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};

export default mutation;
