const { gql } = require('apollo-server-express');
const WorkerSch  = require('./schema/workerShc');
const ClientSch = require('./schema/clientSch');
const SaleSch = require('./schema/saleSch');

const typeDefs = gql`

    scalar DateTime

    type Query {
        hello: String
        ${WorkerSch.WorkerSchQ}
        ${ClientSch.ClientSchQ}
        ${SaleSch.SaleSchQ}
    }

    type Mutation {
        ${WorkerSch.WorkerSchM}
        ${ClientSch.ClientSchM}
        ${SaleSch.SaleSchM}
    }

    ${WorkerSch.WorkerExtra}
    ${ClientSch.ClientExtra}
    ${SaleSch.SaleExtra}
`;

module.exports = typeDefs;