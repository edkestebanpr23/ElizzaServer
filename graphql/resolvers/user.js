const User = require('../../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });

const createToken = (user, secret, expiresIn) => {
    const { id, email } = user;

    const token = jwt.sign({ id, email }, secret, { expiresIn });
    data = {
        name: user.name,
        email: user.email,
        // register: user.register
        church: user.church,
        img: user.img,
        description: user.description,
        token
    }
    data.token = token;
    /**
     * El primer parámetro es el payload, información a encriptar
     * Segundo la palabra secreta
     * Tercero, la expiración
     */
    console.log('Retornando:', data);
    return data;
};

const UserRsvM = {
    createUser: async (_, { input }) => {
        const { name, email, password } = input;
        console.log(name + " " + password + " " + email);
        const user = await User.findOne({ email });

        console.log(user);
        // Si el usuario ya existe
        if (user) {
            throw new Error('exist');
        }

        try {
            // Hasheasr password
            /**
             * El salt hashea y genera una cadena muy dificil de hackear
             */
            const salt = await bcryptjs.genSalt(10);
            input.password = await bcryptjs.hash(password, salt);

            const newUser = new User(input);
            newUser.save();
            console.log(newUser);
            return true;
        } catch (error) {
            console.log(error);
        }
    },
    loginUser: async (_, { input }) => {
        const { email, password } = input;
        console.log(input);

        // Revisar si el usuario existe
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('wrongData');
        }

        // Revisar si el password es correcto
        const passwordOk = await bcryptjs.compare(password, user.password); // Campara el pass traido de BD y el ingresado

        if (!passwordOk) {
            throw new Error('wrongData');
        }

        // Dar acceso a la app
        return createToken(user, process.env.SECRET, '100 days');
    }
}

module.exports = UserRsvM;