const { GraphQLScalarType } = require('graphql');

const { WorkerRsvM, WorkerRsvQ } = require('./resolvers/workerRsv');
const { ClientRsvM, ClientRsvQ } = require('./resolvers/clientRsv');
const { SaleRsvM, SaleRsvQ } = require('./resolvers/saleRsv');

const resolvers = {
    DateTime: new GraphQLScalarType({
      name: 'DateTime',
      description: 'Equivalents new Date() in js',
      serialize: (value) => value.toISOString(),
      parseValue: (value) => new Date(value),
      parseLiteral: (ast) => new Date(ast.value)
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