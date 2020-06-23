const Worker = require('../../models/Worker');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

const createToken = (worker, secret, expiresIn) => {
    const { id, document } = worker;

    const token = jwt.sign({ id, document }, secret, { expiresIn });
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

const WorkerRsvM = {
    createWorker: async (_, { input }) => {
        const { name, document, password, telephone, rol } = input;

        // Verificar rol
        if (rol !== 'admin' && rol !== 'worker') {
            throw new Error('rol');
        }

        console.log(name + " " + document + " " + password + " " + telephone + " " + rol);

        const worker = await Worker.findOne({ document });

        console.log(worker);
        // Si el usuario ya existe
        if (worker) {
            throw new Error('exist');
        }

        try {
            // Hasheasr password
            /**
             * El salt hashea y genera una cadena muy dificil de hackear
             */
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);

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
    }
}

module.exports = WorkerRsvM;