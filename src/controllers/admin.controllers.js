const path = require('path');
const data = [
    {
        product_id: 1,
        licence_name: "Star-Wars",
        category_name:  "Disfruta de una saga que sigue agregando personajes a su colección.",
        product_name: "Star Wars & The Mandalorian",
        product_description: "Figura coleccionable star wars",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001002",
        img_front: "/img/star-wars/baby-yoda-1.webp",
        img_back: "/img/star-wars/baby-yoda-box.webp"
    },
    {
        product_id: 2,
        licence_name: "Pokemon",
        category_name: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_name: "Pokemon Indigo",
        product_description: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001003",
        img_front: "/img/pokemon/vulpix-1.webp",
        img_back: "/img/pokemon/vulpix-box.webp"
    },
    {
        product_id: 3,
        licence_name: "Harry Potter",
        category_name: "Revive los recuerdos de una saga llena de magia y encanto.",
        product_name: "Hermione",
        product_description: "Revive los recuerdos de una saga llena de magia y encanto.",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/img/harry-potter/hermione-1.webp",
        img_back: "/img/harry-potter/hermione-box.webp"
    },
    {
        product_id: 4,
        licence_name: "Star-Wars",
        category_name: "Disfruta de una saga que sigue agregando personajes a su colección.",
        product_name: "Bobbafeth",
        product_description: "Figura coleccionable star wars",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001004",
        img_front: "/img/star-wars/bobbafeth-1.webp",
        img_back: "/img/star-wars/bobbafeth-box.webp"
    },
    {
        product_id: 5,
        licence_name: "Pokemon",
        category_name: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_name: "Charmander",
        product_description: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001005",
        img_front: "/img/pokemon/charmander-1.webp",
        img_back: "/img/pokemon/charmander-box.webp"
    },
    {
        product_id: 6,
        licence_name: "Harry Potter",
        category_name: "Revive los recuerdos de una saga llena de magia y encanto.",
        product_name: "Harry Potter",
        product_description: "Revive los recuerdos de una saga llena de magia y encanto.",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001006",
        img_front: "/img/harry-potter/harry-1.webp",
        img_back: "/img/harry-potter/harry-box.webp"
    },
    {
        product_id: 7,
        licence_name: "Star-Wars",
        category_name: "Disfruta de una saga que sigue agregando personajes a su colección.",
        product_name: "Luke",
        product_description: "Figura coleccionable star wars",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001007",
        img_front: "/img/star-wars/luke-1.webp",
        img_back: "/img/star-wars/luke-box.webp"
    },
    {
        product_id: 8,
        licence_name: "Pokemon",
        category_name: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_name: "Dragonite",
        product_description: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001008",
        img_front: "/img/pokemon/dragonite-1.webp",
        img_back: "/img/pokemon/dragonite-box.webp"
    },
    {
        product_id: 9,
        licence_name: "Harry Potter",
        category_name: "Revive los recuerdos de una saga llena de magia y encanto.",
        product_name: "Luna",
        product_description: "Revive los recuerdos de una saga llena de magia y encanto.",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001009",
        img_front: "/img/harry-potter/luna-1.webp",
        img_back: "/img/harry-potter/luna-box.webp"
    },
    {
        product_id: 10,
        licence_name: "Pokemon",
        category_name: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_name: "Pikachu",
        product_description: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001008",
        img_front: "/img/pokemon/pikachu-1.webp",
        img_back: "/img/pokemon/pikachu-box.webp"
    },
    {
        product_id: 11,
        licence_name: "Harry Potter",
        category_name: "Revive los recuerdos de una saga llena de magia y encanto.",
        product_name: "Snape",
        product_description: "Revive los recuerdos de una saga llena de magia y encanto.",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/img/harry-potter/snape-patronus-1.webp",
        img_back: "/img/harry-potter/snape-patronus-box.webp"
    },
    {
        product_id: 12,
        licence_name: "Pokemon",
        category_name: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_name: "Pidgeotto",
        product_description: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001008",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp"
    }
];
const adminControllers = {
    admin: (req, res) => {
         res.render(path.resolve(__dirname,'../views/admin/admin.ejs'),{
            title: "ADMINISTRACION",
            data
        });},
    create: (req, res) => {
        res.render(path.resolve(__dirname,'../views/admin/create.ejs'),{
            title: "CREAR ITEM",
            data
        });},
    createItem: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
    editView: (req, res) =>  {
        res.render(path.resolve(__dirname,'../views/admin/edit.ejs'),{
            title: "EDITAR ITEM",
            data
        });},
    editDate: (req, res) => res.send('esta es la vista para realizar la modificacion'),
    delete: (req, res) => res.send('Esta es la vista para eliminar item'),

    // (req, res) => {
    //     const { id } = req.params;
    
    //     res.send(`Usted quiere eliminar su item: ${id}`)}),
}
module.exports = adminControllers;