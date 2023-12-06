
const mainControllers = {
home: (req, res) => {
    res.render('home',{title: "Home"})},

contact:(req, res) => res.send('Esta es la vista de contactos'),
about:(req, res) => res.send('Esta es la vista sobre nosotros'),
faqs:(req, res) => res.send('Esta es la vista de Preguntas Frecuentes')
}
module.exports = mainControllers;
