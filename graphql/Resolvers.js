const WorkerRsvM = require('./resolvers/workerRsv');
const ClientRsvM = require('./resolvers/clientRsv');

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
    Mutation: {
      ...WorkerRsvM,
      ...ClientRsvM
    }
  };

module.exports = resolvers;