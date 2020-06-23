const { gql } = require('apollo-server-express');

const PraiseSchQ = `
    
`;

const PraiseSchM = `
    createPraise(input: PraiseInput): Praise
    # keywords: KeywordsInput
`;

const PraiseExtra = `
    input PraiseInput {
        title: String!
        languages: [LanguageInput]
        author: [AuthorInput]
        year: Int
        subject: String!
        uploadby: ID
        keywords: [String]
    }

    input LanguageInput {
        id: ID
        language: String
    }

    input AuthorInput {
        id: ID
        name: String
    }

    type Praise {
        id: ID
        title: String
        languages: [LanguageType]
        author: [AuthorType]
        keywords: [String]
        year: Int
        subject: String!
        uploadby: ID
    }

    type LanguageType {
        id: ID
        language: String
    }

    type AuthorType {
        id: ID
        name: String
    }

`;

const PraiseSch = { PraiseSchQ, PraiseSchM, PraiseExtra };

module.exports = PraiseSch;