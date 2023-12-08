const authControllers = {
    login: (req, res) => res.send('Esta es la vista de Login'),
    loginRoute: (req, res) => res.send('Esta es la ruta que valida los datos'),
    register: (req, res) => res.send('Route for Register View'),
    registeRouter: (req, res) => res.send('Esta es la ruta que Crea un nuevo usuario'),
    logout: (req, res) => res.send('Route for Logout View'),
}
module.exports = authControllers;