import { QueryResolvers } from "../../../types.generated.js";

const users: QueryResolvers["users"] = async (_parent, _args, ctx) => {
  return await ctx.prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export default users;
