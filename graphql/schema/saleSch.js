const SaleSchQ = `
    #getSales: [DataSale]
`;

const SaleSchM = `
    createSale(input: SaleInput, products: [ProductInput] ): Boolean
`;

const SaleExtra = `
    input SaleInput {
        worker: ID!
        client: ID!
        finalized: Boolean
        total: Int!
        description: String
        #products: [ProductInput]
        separate: Boolean!
        payment: [PaymentInput]
        cellar: String
    }

    input ProductInput {
        name: String!
        category: String
        woman: Boolean
        price: Int!
        quantity: Int!
    }

    input PaymentInput {
        quantity: Int!
        date: DateTime
    }
`;

const SaleSch = { SaleSchQ, SaleSchM, SaleExtra };

module.exports = SaleSch;