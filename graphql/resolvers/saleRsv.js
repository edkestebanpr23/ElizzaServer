const Sale = require('../../models/Sale');

const SaleRsvQ = {
    // getSales: async (_, { }) => {
    //     const sales = await Sale.find();
    //     console.log(sales)
    //     return sales;
    // }
};

const SaleRsvM = {
    createSale: async (_, { input, products }) => {
        try {
            console.log(products);
            input.products = products;
            const newSale = new Sale(input);
            newSale.save();
            console.log(newSale);
            return true;
        } catch (error) {
            console.log(error);
        }
    },
    // updateSale: async (_, { id, input }, ctx) => {
    //     // Saber si la sale existe o no
    //     let sale = await Sale.findById(id);

    //     if (!sale) {
    //         throw new Error('not exist');
    //     }

    //     // Si la persona es el creador
    //     if (ctx.user.rol !== 'admin' && ctx.user.rol !== 'worker') {
    //         throw new Error('not permissions');
    //     }

    //     // Guardar y retornar la salee
    //     sale = await Sale.findOneAndUpdate({ _id: id }, input, { new: true });
    //     return sale;
    // },
    // deleteSale: async (_, { id }, ctx) => {
    //     // El salee no se elimina, el salee solo se actualiza el estado a inactivo
    //     // Saber si la sale existe o no
    //     let sale = await Sale.findById(id);

    //     if (!sale) {
    //         throw new Error('not exist');
    //     }

    //     // Si la persona es el creador
    //     if (ctx.user.rol !== 'admin' && ctx.user.rol !== 'worker') {
    //         throw new Error('not permissions');
    //     }

    //     // Guardar y retornar la salee
    //     sale = await Sale.findOneAndUpdate({ _id: id }, { active: false }, { new: true });
    //     console.log(sale);
    //     return true;
    // }
};

const SaleRsv = { SaleRsvQ, SaleRsvM };

module.exports = SaleRsv;