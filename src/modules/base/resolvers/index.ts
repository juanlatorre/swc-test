import { DateTimeResolver, EmailAddressResolver } from "graphql-scalars";

import { Resolvers } from "../../../types.generated.js";

const query: Resolvers = {
  DateTime: DateTimeResolver,
  EmailAddress: EmailAddressResolver,
};

export default query;
