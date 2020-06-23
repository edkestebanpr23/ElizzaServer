const Praise = require('../../models/Praise');


const UserRsvM = {
    createPraise: async (_, { input }, ctx) => {
        /**
         * En el contexto que recibe nativamente el resolver viene el token, el cual en el index
         * Se almacenó como usuario
         */
        // console.log(input);
        // console.log(language);
        // console.log(author);
        const uploadby = ctx.user.id;
        console.log("upload by:", uploadby);
        const _praise = {
            ...input,
            // languages: language,
            // author,
            uploadby
        };
        console.log(_praise);

        // return "Praise created!";
        // console.log('Desde resolver:', ctx);
        try {
            const praise = new Praise(_praise);

            // Asociar el creador al proyecto
            // console.log("Contexto: "ctx)
            // proyecto.creador = ctx.usuario.id;

            // Almacenando en la BD
            const resultado = await praise.save();
            console.log(resultado);
            // return "Praise Create";
            return resultado;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserRsvM;