const { gql } = require('apollo-server-express');

const ClientSchQ = `
    
`;

const ClientSchM = `
    createClient(input: ClientInput): Boolean
    #loginClient(input: LoginInput): DataClient
    updateClient(id: ID!, input: ClientInput): DataClient
    deleteClient(id: ID!): Boolean
`;

const ClientExtra = `
    input ClientInput {
        name: String!
        telephone: String!
        telephone2: String
        sex: String
        description: String
        worker: ID!
    }

    type DataClient {
        token: String!
        name: String!
        telephone: String!
        telephone2: String
        sex: String
        description: String
        worker: ID!
    }


`;

const ClientSch = { ClientSchQ, ClientSchM, ClientExtra };

module.exports = ClientSch;