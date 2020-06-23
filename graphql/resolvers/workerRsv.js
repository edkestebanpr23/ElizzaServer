const Worker = require('../../models/Worker');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

const createToken = (worker, secret, expiresIn) => {
    const { id, document, rol } = worker;

    const token = jwt.sign({ id, document, rol }, secret, { expiresIn });
    data = {
        name: worker.name,
        telephone: worker.telephone,
        rol: worker.rol,
        img: worker.img,
        token
    }
    /**
     * El primer parámetro es el payload, información a encriptar
     * Segundo la palabra secreta
     * Tercero, la expiración
     */
    console.log('Retornando:', data);
    return data;
};

const WorkerRsvQ = {
    getWorkers: async (_, { }) => {
        const worker = await Worker.find();
        console.log(worker)
        return worker;
    }
};

const WorkerRsvM = {
    createWorker: async (_, { input }, ctx) => {
        const { name, document, password, telephone, rol } = input;

        // Verificar rol
        if (rol !== 'admin' && rol !== 'worker') {
            console.log('error 11111');
            throw new Error('rol');
        }

        if (ctx.user.rol !== 'admin') {
            console.log('error 22222');
            throw new Error('not admin');
        }


        const worker = await Worker.findOne({ document });

        console.log(worker);
        // Si el usuario ya existe
        if (worker) {
            console.log('error 33333');
            throw new Error('exist');
        }

        try {
            console.log('error 44444');
            // Hasheasr password
            /**
             * El salt hashea y genera una cadena muy dificil de hackear
             */
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);
            console.log('error 55555');

            const newWorker = new Worker(input);
            newWorker.save();
            console.log(newWorker);
            return true;
        } catch (error) {
            console.log(error);
        }
    },
    loginWorker: async (_, { input }) => {
        const { document, password } = input;
        console.log(input);

        // Revisar si el usuario existe
        const worker = await Worker.findOne({ document });

        if (!worker) {
            throw new Error('wrongData');
        }

        // Revisar si el password es correcto
        const passwordOk = await bcryptjs.compare(password, worker.password); // Campara el pass traido de BD y el ingresado

        if (!passwordOk) {
            throw new Error('wrongData');
        }

        // Dar acceso a la app
        return createToken(worker, process.env.SECRET, '1000 days');
    },
    updateWorker: async (_, { id, input }, ctx) => {
        // Saber si la worker existe o no
        let worker = await Worker.findById(id);

        if (!worker) {
            throw new Error('not exist');
        }

        // Si la persona no es el admin
        if (ctx.user.rol !== 'admin') {
            throw new Error('not permissions');
        }

        // Guardar y retornar worker
        worker = await Worker.findOneAndUpdate({ _id: id }, input, { new: true });
        return worker;
    },
    deleteWorker: async (_, { id }, ctx) => {
        // Worker no se elimina, solo se actualiza el estado a inactivo
        // Saber si la worker existe o no
        let worker = await Worker.findById(id);

        if (!worker) {
            throw new Error('not exist');
        }

        // Si la persona no es el admin
        if (ctx.user.rol !== 'admin' && ctx.user.rol !== 'worker') {
            throw new Error('not permissions');
        }

        // Guardar y retornar la workere
        worker = await Worker.findOneAndUpdate({ _id: id }, { active: false }, { new: true });
        console.log(worker);
        return true;
    }
}

const WorkerRsv = { WorkerRsvQ, WorkerRsvM };
module.exports = WorkerRsv;