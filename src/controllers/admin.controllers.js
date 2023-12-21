const path = require('path');
const { getAll, getOne, create, deleteOne } = require('../models/product.model');
const { log } = require('console');

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
    createItem: async (req, res) => {
        const product_schema ={
    product_name: req.body.name,
    product_description: req.body.description,
    price: Number(req.body.price),
    stock: Number(req.body.stock),
    discount: Number(req.body.discount),
    sku: req.body.sku,
    dues: Number(req.body.dues),
    image_front: '/products/'+req.files[0].filename,
    image_back: '/products/'+req.files[1].filename,
    category_id: Number(req.body.category),
    licence_id: Number(req.body.licence)
}

const result = await create([Object.values(product_schema)]);
console.log("array: ", [Object.values(product_schema)]);
console.log(result);
res.redirect('/admin');
    },
        editView: async (req, res) =>  {
        const itemId = req.params.id;
        const [item] = await getOne({ product_id: itemId });
        res.render(path.resolve(__dirname,'../views/admin/edit.ejs'),{
            title: "EDITAR ITEM",
            item
        });},
    editDate: (req, res) => res.send('esta es la vista para realizar la modificacion'),
    delete: async (req, res) => {
        const { id }= req.params;
        await deleteOne({ product_id: id});
       res.redirect('/admin');
    }
}
module.exports = adminControllers;
