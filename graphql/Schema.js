const { gql } = require('apollo-server-express');
const WorkerSch  = require('./schema/workerShc');

const typeDefs = gql`
    type Query {
        hello: String
        ${WorkerSch.WorkerSchQ}
    }

    type Mutation {
        ${WorkerSch.WorkerSchM}
    }

    ${WorkerSch.WorkerExtra}
`;

module.exports = typeDefs;