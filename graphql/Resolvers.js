const {WorkerRsvM, WorkerRsvQ } = require('./resolvers/workerRsv');
const { ClientRsvM, ClientRsvQ } = require('./resolvers/clientRsv');

const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      ...ClientRsvQ,
      ...WorkerRsvQ
    },
    Mutation: {
      ...WorkerRsvM,
      ...ClientRsvM
    }
  };

module.exports = resolvers;