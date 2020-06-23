const { gql } = require('apollo-server-express');

const UserSchQ = `
    
`;

const UserSchM = `
    createUser(input: UserInput): Boolean
    loginUser(input: LoginInput): DataUser
`;

const UserExtra = `
    input UserInput {
        name: String!
        email: String!
        password: String!
        country: String!
        state: String!
        city: String!
        church: String!
        img: String
    }

    input LoginInput {
        email: String!
        password: String!
    }

    type Token {
        token: String
    }

    type DataUser {
        token: String!
        name: String!
        email: String!
        description: String
        img: String
        country: String!
        state: String!
        city: String!
        church: String
        #published: []
        #collaborations: []
        #register: String
    }
`;

const UserSch = { UserSchQ, UserSchM, UserExtra };

module.exports = UserSch;