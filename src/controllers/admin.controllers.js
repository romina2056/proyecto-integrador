const path = require('path');
const adminControllers = {
    admin: (req, res) => {
         res.render(path.resolve(__dirname,'../views/admin/admin.ejs'),{
            title: "ADMINISTRACION"
        });},
    create: (req, res) => {
        res.render(path.resolve(__dirname,'../views/admin/create.ejs'),{
            title: "CREAR ITEM"
        });},
    createItem: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    editView: (req, res) =>  {
        res.render(path.resolve(__dirname,'../views/admin/edit.ejs'),{
            title: "EDITAR ITEM"
        });},
    editDate: (req, res) => res.send('esta es la vista para realizar la modificacion'),
    delete: (req, res) => res.send('Esta es la vista para eliminar item'),

    // (req, res) => {
    //     const { id } = req.params;
    
    //     res.send(`Usted quiere eliminar su item: ${id}`)}),
}
module.exports = adminControllers;