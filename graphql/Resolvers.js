const { GraphQLScalarType } = require('graphql');
const { Kind } = require("graphql/language");

const { WorkerRsvM, WorkerRsvQ } = require('./resolvers/workerRsv');
const { ClientRsvM, ClientRsvQ } = require('./resolvers/clientRsv');
const { SaleRsvM, SaleRsvQ } = require('./resolvers/saleRsv');

const resolvers = {
    DateTime: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue(value) {
        return new Date(value); // value from the client
      },
      serialize(value) {
        return value.getTime(); // value sent to the client
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return new Date(+ast.value) // ast value is always in string format
        }
        return null;
      },
    }),
    Query: {
      hello: () => 'Hello world!',
      ...ClientRsvQ,
      ...WorkerRsvQ,
      ...SaleRsvQ
    },
    Mutation: {
      ...WorkerRsvM,
      ...ClientRsvM,
      ...SaleRsvM
    }
  };

module.exports = resolvers;