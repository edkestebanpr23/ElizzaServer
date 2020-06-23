const WorkerSchQ = `
    
`;

const WorkerSchM = `
    createWorker(input: WorkerInput): Boolean
    loginWorker(input: LoginInput): DataWorker
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
    }
`;

const UserSch = { WorkerSchQ, WorkerSchM, WorkerExtra };

module.exports = UserSch;