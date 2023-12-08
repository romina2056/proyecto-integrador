const path = require('path');
const shopControllers = {
    shop: (req, res) => {
        res.render(path.resolve(__dirname,'../views/shop/shop.ejs'));},
    item: (req, res) => res.send('Esta es la vista del item Seleccionado'),
    itemAdd: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    cart: (req, res) => res.send('Esta es la vista del carrito'),
    cartItem: (req, res) => res.send('Esta es la ruta para agregar un nuevo item al carrito'),
}
module.exports = shopControllers;