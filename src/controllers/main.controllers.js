const mainControllers = {
    home: (req, res) => {
        res.render('home');},
              //         data: {
    //             product_id: 1,
    //             licence_name: "Star-Wars",
    //             category_name: "Disfruta de una saga que sigue agregando personajes a su colección.",
    //             product_name: "Star Wars & The Mandalorian",
    //             product_description: "Figura coleccionable star wars",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001002",
    //             img_front: "/img/star-wars/baby-yoda-1.webp",
    //             img_back: "/img/star-wars/baby-yoda-box.webp"
    //         },
    //         {
    //             product_id: 2,
    //             licence_name: "Pokemon",
    //             category_name: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
    //             product_name: "Pokemon Indigo",
    //             product_description: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001003",
    //             img_front: "/img/pokemon/vulpix-1.webp",
    //             img_back: "/img/pokemon/vulpix-box.webp"
    //         },
    //         {
    //             product_id: 3,
    //             licence_name: "Harry Potter",
    //             category_name: "Revive los recuerdos de una saga llena de magia y encanto.",
    //             product_name: "Harry Potter",
    //             product_description: "Revive los recuerdos de una saga llena de magia y encanto.",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001001",
    //             img_front: "/img/harry-potter/snape-patronus-1.webp",
    //             img_back: "/img/harry-potter/snape-patronus-box.webp"
    //         },
    //         {
    //             product_id: 4,
    //             licence_name: "Star-Wars",
    //             category_name: "Disfruta de una saga que sigue agregando personajes a su colección.",
    //             product_name: "Star Wars & The Mandalorian",
    //             product_description: "Figura coleccionable star wars",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001002",
    //             img_front: "/img/star-wars/baby-yoda-1.webp",
    //             img_back: "/img/star-wars/baby-yoda-box.webp"
    //         },
    //         {
    //             product_id: 5,
    //             licence_name: "Pokemon",
    //             category_name: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
    //             product_name: "Pokemon Indigo",
    //             product_description: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001003",
    //             img_front: "/img/pokemon/vulpix-1.webp",
    //             img_back: "/img/pokemon/vulpix-box.webp"
    //         },
    //         {
    //             product_id: 6,
    //             licence_name: "Harry Potter",
    //             category_name: "Revive los recuerdos de una saga llena de magia y encanto.",
    //             product_name: "Harry Potter",
    //             product_description: "Revive los recuerdos de una saga llena de magia y encanto.",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001001",
    //             img_front: "/img/harry-potter/snape-patronus-1.webp",
    //             img_back: "/img/harry-potter/snape-patronus-box.webp"
    //         },
    //         {
    //             product_id: 7,
    //             licence_name: "Star-Wars",
    //             category_name: "Disfruta de una saga que sigue agregando personajes a su colección.",
    //             product_name: "Star Wars & The Mandalorian",
    //             product_description: "Figura coleccionable star wars",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001002",
    //             img_front: "/img/star-wars/baby-yoda-1.webp",
    //             img_back: "/img/star-wars/baby-yoda-box.webp"
    //         },
    //         {
    //             product_id: 8,
    //             licence_name: "Pokemon",
    //             category_name: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
    //             product_name: "Pokemon Indigo",
    //             product_description: "Atrapa todos los que puedas y disfruta de una colección llena de amigos.",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001003",
    //             img_front: "/img/pokemon/vulpix-1.webp",
    //             img_back: "/img/pokemon/vulpix-box.webp"
    //         },
    //         {
    //             product_id: 9,
    //             licence_name: "Harry Potter",
    //             category_name: "Revive los recuerdos de una saga llena de magia y encanto.",
    //             product_name: "Harry Potter",
    //             product_description: "Revive los recuerdos de una saga llena de magia y encanto.",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001001",
    //             img_front: "/img/harry-potter/snape-patronus-1.webp",
    //             img_back: "/img/harry-potter/snape-patronus-box.webp"
    //         },
    //         {
    //             product_id: 10,
    //             licence_name: "Harry Potter",
    //             category_name: "Revive los recuerdos de una saga llena de magia y encanto.",
    //             product_name: "Harry Potter",
    //             product_description: "Revive los recuerdos de una saga llena de magia y encanto.",
    //             product_price: 1799.99,
    //             dues: 10,
    //             product_sku: "PKM001001",
    //             img_front: "/img/harry-potter/snape-patronus-1.webp",
    //             img_back: "/img/harry-potter/snape-patronus-box.webp"
    //         }

    // })
    contact: (req, res) => res.send('Esta es la vista de contacto'),
    about: (req, res) => res.send('Esta es la vista sobre nosotros'),
    faqs: (req, res) => res.send('Esta es la vista de Preguntas Frecuentes'),
       }


module.exports = mainControllers;
