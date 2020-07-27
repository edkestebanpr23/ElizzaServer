const SaleSchQ = `
    getSales: [SaleType]
`;

const SaleSchM = `
    createSale(input: SaleInput, products: [ProductInput], payments: [PaymentInput]): Boolean
    updateSale(id: ID!, input: SaleInput, products: [ProductInput], payments: [PaymentInput]): SaleType
    updatePayment(id: ID, payment: PaymentInput): SaleType
    deleteSale(id: ID!): Boolean
`;

const SaleExtra = `
    input SaleInput {
        worker: ID
        client: ID!
        finalized: Boolean
        total: Int!
        description: String
        #products: [ProductInput]
        credit: Boolean!
        #payments: [PaymentInput]
        cellar: String
        register: String
    }

    input ProductInput {
        product: String!
        category: String
        woman: Boolean
        price: Int!
        quantity: Int!
    }

    input PaymentInput {
        quantity: Int!
        date: String
    }

    type SaleType {
        id: ID!
        worker: ID!
        client: ID!
        finalized: Boolean
        total: Int!
        description: String
        products: [ProductType]
        credit: Boolean!
        payments: [PaymentType]
        cellar: String
        register: String
    }

    type ProductType {
        product: String!
        category: String
        woman: Boolean
        price: Int!
        quantity: Int!
    }

    type PaymentType {
        quantity: Int!
        date: String
    }
`;

const SaleSch = { SaleSchQ, SaleSchM, SaleExtra };

module.exports = SaleSch;