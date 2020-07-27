const { gql } = require('apollo-server-express');

const ClientSchQ = `
    getClients: [DataClient]
    getClient (id: ID!): DataClient
`;

const ClientSchM = `
    createClient(input: ClientInput): Boolean
    updateClient(id: ID!, input: ClientInput): DataClient
    deleteClient(id: ID!): Boolean
`;

const ClientExtra = `
    input ClientInput {
        name: String!
        telephone: String!
        telephone2: String
        whatsapp: String
        sex: String
        description: String
        worker: ID
    }

    type DataClient {
        id: ID!
        token: String!
        name: String!
        telephone: String!
        telephone2: String
        whatsapp: String
        sex: String
        description: String
        worker: ID!
        active: Boolean
    }


`;

const ClientSch = { ClientSchQ, ClientSchM, ClientExtra };

module.exports = ClientSch;