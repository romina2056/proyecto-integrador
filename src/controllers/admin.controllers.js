const path = require('path');
const { getAll, getOne } = require('../models/product.model');

const adminControllers = {
    admin: async (req, res) => {
        const data = await getAll();
         res.render(path.resolve(__dirname,'../views/admin/admin.ejs'),{
            title: "ADMINISTRACION",
            data
        });},
    create: async (req, res) => {
        const data = await getAll();
        res.render(path.resolve(__dirname,'../views/admin/create.ejs'),{
            title: "CREAR ITEM",
            data
        });},
    createItem: (req, res) => {
const product_schema ={
    product_name: req.body.name,
    product_description: req.body.descrption,
    price: req.body.price,
    stock: req.body.stock,
    discount: req.body.discount,
    sku: req.body.sku,
    dues: req.body.dues,
    category_id: req.body.category,
    licence_id: req.body.licence,
    image_front: req.files[0].originalname,
    back: req.files[1].originalname
}

        res.send('Esta es la ruta para agregar un nuevo item')
    },
        editView: async (req, res) =>  {
        const itemId = req.params.id;
        const [item] = await getOne({ product_id: itemId });
        res.render(path.resolve(__dirname,'../views/admin/edit.ejs'),{
            title: "EDITAR ITEM",
            item
        });},
    editDate: (req, res) => res.send('esta es la vista para realizar la modificacion'),
    delete: (req, res) => res.send('Esta es la vista para eliminar item'),
}
module.exports = adminControllers
getAll,
getOne;