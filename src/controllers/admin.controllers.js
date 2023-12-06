const adminControllers = {
    admin: (req, res) => res.send('Esta es la vista de Admin'),
    create: (req, res) => res.send('Esta es la vista para crear un nuevo item'),
    createItem: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    editView: (req, res) => res.send('Esta es la vista para editar'),
    editDate: (req, res) => res.send('esta es la vista para realizar la modificacion'),
    delete: (req, res) => res.send('Esta es la vista para eliminar item'),

    // (req, res) => {
    //     const { id } = req.params;
    
    //     res.send(`Usted quiere eliminar su item: ${id}`)}),
}
module.exports = adminControllers;