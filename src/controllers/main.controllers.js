const path = require('path');
const mainControllers = {
    home: (req, res) => {
        res.render('home',{
            title: "HOME"
        });},
       
    contact: (req, res) => {
        res.render(path.resolve(__dirname,'../views/main/contact.ejs'),{
            title: "CONTACTO"
        });},
    about: (req, res) => res.send('Esta es la vista sobre nosotros'),
    faqs: (req, res) => res.send('Esta es la vista de Preguntas Frecuentes'),
       }


module.exports = mainControllers;
