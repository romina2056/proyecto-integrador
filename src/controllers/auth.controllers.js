const path = require('path');
const authControllers = {
    login: (req, res) =>{
        res.render(path.resolve(__dirname,'../views/auth/login.ejs'),{
            title: "LOGIN"
        });},
    loginRoute: (req, res) => res.send('Esta es la ruta que valida los datos'),
    register: (req, res) => {
        res.render(path.resolve(__dirname,'../views/auth/register.ejs'),{
            title: "REGISTRO"
        });},
    registeRouter: (req, res) => res.send('Esta es la ruta que Crea un nuevo usuario'),
    logout: (req, res) => res.send('Route for Logout View'),
}
module.exports = authControllers;