const Client = require('../../models/Client');

const ClientRsvQ = {
    getClients: async (_, { }) => {
        const clients = await Client.find();
        let d = new Date();
        console.log('getClients -> ', d);
        return clients;
    },
    getClient: async (_, { id }) => {
        const client = await Client.findById({'_id': id});
        console.log(client);
        return client;
    }
};

const ClientRsvM = {
    createClient: async (_, { input }, ctx) => {
        const { telephone } = input;
        console.log('Context', ctx);
        input.worker = ctx.user.id;
        const client = await Client.findOne({ telephone });

        console.log(client);
        
        // Si el usuario ya existe
        if (client) {
            // Si existe pero estaba desactivado...
            if (client.active == false) {
                input.active = true;
                await Client.findOneAndUpdate({ _id: id }, input, { new: true });
                return true;
            } else {
                throw new Error('exist');
            }
        }

        try {
            const newClient = new Client(input);
            newClient.save();
            console.log(newClient);
            return true;
        } catch (error) {
            console.log(error);
        }
    },
    updateClient: async (_, { id, input }, ctx) => {
        // Saber si la client existe o no
        let client = await Client.findById(id);

        if (!client) {
            throw new Error('not exist');
        }

        // Si la persona es el creador
        if (ctx.user.rol !== 'admin' && ctx.user.rol !== 'worker') {
            throw new Error('not permissions');
        }

        // Guardar y retornar la cliente
        client = await Client.findOneAndUpdate({ _id: id }, input, { new: true });
        return client;
    },
    deleteClient: async (_, { id }, ctx) => {
        // El cliente no se elimina, el cliente solo se actualiza el estado a inactivo
        // Saber si la client existe o no
        let client = await Client.findById(id);

        if (!client) {
            throw new Error('not exist');
        }

        // Si la persona es el creador
        if (ctx.user.rol !== 'admin' && ctx.user.rol !== 'worker') {
            throw new Error('not permissions');
        }

        // Guardar y retornar la cliente
        client = await Client.findOneAndUpdate({ _id: id }, { active: false }, { new: true });
        console.log(client);
        return true;
    }
}

const ClientRsv = { ClientRsvQ, ClientRsvM };

module.exports = ClientRsv;