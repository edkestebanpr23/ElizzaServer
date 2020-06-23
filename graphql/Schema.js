const { gql } = require('apollo-server-express');
const WorkerSch  = require('./schema/workerShc');
const ClientSch = require('./schema/clientSch')

const typeDefs = gql`
    type Query {
        hello: String
        ${WorkerSch.WorkerSchQ}
        ${ClientSch.ClientSchQ}
    }

    type Mutation {
        ${WorkerSch.WorkerSchM}
        ${ClientSch.ClientSchM}
    }

    ${WorkerSch.WorkerExtra}
    ${ClientSch.ClientExtra}
`;

module.exports = typeDefs;