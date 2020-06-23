const WorkerSchQ = `
    getWorkers: [DataWorker]
`;

const WorkerSchM = `
    createWorker(input: WorkerInput): Boolean
    loginWorker(input: LoginInput): DataWorker
    updateWorker(id: ID!, input: ClientInput): DataWorker
    deleteWorker(id: ID!): Boolean
`;

const WorkerExtra = `
    input WorkerInput {
        name: String!
        document: String!
        password: String!
        telephone: String!
        rol: String!
        img: String
    }

    input LoginInput {
        document: String!
        password: String!
    }

    type Token {
        token: String
    }

    type DataWorker {
        token: String!
        name: String!
        telephone: String!
        img: String
        rol: String!
        active: Boolean
    }
`;

const UserSch = { WorkerSchQ, WorkerSchM, WorkerExtra };

module.exports = UserSch;