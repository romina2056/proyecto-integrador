
const shopControllers = {
    shop: (req, res) => res.render(path.resolve(__dirname, '../data/characters.json')),
    
    cart: (req, res) => res.send('Route for cart View'),
}
module.exports = shopControllers;