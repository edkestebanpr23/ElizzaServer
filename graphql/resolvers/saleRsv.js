const Sale = require('../../models/Sale');

const SaleRsvQ = {
    getSales: async (_, { }) => {
        const sales = await Sale.find();
        console.log('Retornando Todas las Ventas');
        return sales;
    }
};

const SaleRsvM = {
    createSale: async (_, { input, products, payments }, ctx) => {
        try {
            console.log(products);
            input.products = products;
            input.payments = payments;
            input.worker = ctx.user.id;
            const newSale = new Sale(input);
            newSale.save();
            console.log(newSale);
            return true;
        } catch (error) {
            console.log(error);
        }
    },
    updateSale: async (_, { id, input, products, payments }, ctx) => {
        // Saber si la sale existe o no
        let sale = await Sale.findById(id);

        if (!sale) {
            throw new Error('not exist');
        }

        // Si la persona es el creador
        if (ctx.user.rol !== 'admin' && ctx.user.rol !== 'worker') {
            throw new Error('not permissions');
        }

        // Actualizando productos y abonos
        input.products = products;
        input.payments = payments;

        // Guardar y retornar la salee
        try {
            sale = await Sale.findOneAndUpdate({ _id: id }, input, { new: true });
            console.log(sale);
            return sale;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    deleteSale: async (_, { id }, ctx) => {
        // El salee no se elimina, el salee solo se actualiza el estado a inactivo
        // Saber si la sale existe o no
        let sale = await Sale.findById(id);

        if (!sale) {
            throw new Error('not exist');
        }

        // Si la persona es el creador
        if (ctx.user.rol !== 'admin') {
            throw new Error('not permissions');
        }

        // Eliminar Sale
        try {
            await Sale.findOneAndRemove({ _id: id });
            return true;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    updatePayment: async (_, { id, payment }) => {
        // Saber si la sale existe o no
        console.log('Añadiendo pago', id);
        console.log(payment);
        let sale = await Sale.findById(id);

        if (!sale) {
            throw new Error('not exist');
        }

        // Guardar y retornar la salee
        try {
            sale = await Sale.findOneAndUpdate({ _id: id }, { $push: { payments: payment } }, { new: true });
            console.log('Payment agregado:', payment);
            console.log(sale);
            return sale;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
};

const SaleRsv = { SaleRsvQ, SaleRsvM };

module.exports = SaleRsv;