const express = require("express");
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');

// Middlewarea de configuración 

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

// routas
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);


app.listen(4000, () => console.log("servidor corriendo en http://localhost:4000"));
