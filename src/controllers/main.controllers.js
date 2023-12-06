const fs = require('fs');
const path = require('path')

const mainControllers = {
home: (req, res) => {
    const characters = fs.readFileSync(path.resolve(__dirname, '../data/characters.json'));
    console.log(JSON.parse(characters));
    // const [results] = data;
    // console.log(results);
    res.render('home',{title: "Home"})},

contact:(req, res) => res.send('Route for Contact View'),
about:(req, res) => res.send('Route for About View'),
faqs:(req, res) => res.send('Route for Faqs View')
}
module.exports = mainControllers;
