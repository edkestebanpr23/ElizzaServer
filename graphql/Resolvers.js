const WorkerRsvM = require('./resolvers/workerRsv');

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
    Mutation: {
      ...WorkerRsvM
    }
  };

module.exports = resolvers;