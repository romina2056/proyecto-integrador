const path = require('path');
const { getAll, getOne } = require('../models/product.model');

const shopControllers = {
    shop: async (req, res) => {
        const data = await getAll();
       
            res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), 
            {
                title: "TIENDA",
                data
            });
       
    },
    item: async (req, res) => {
        const data = await getAll();
        const itemId = req.params.id;
        const [item] = await getOne(itemId);
      
        res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
            title: "ITEM",
            item,
            data
            
        });
    },
    itemAdd: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    cart: (req, res) => {
        res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
            title: "CARRITO"
        });
    },

    addToCart: (req, res) => res.send('Esta es la ruta para agregar un nuevo item al carrito'),
} 
module.exports = 
    shopControllers, 
    getAll, 
    getOne;