const express= require("express");
const app= express();
app.use(express.static('public'));
app.get("/home", (req,res) => res.sendFile(__dirname + "/public_html/index.html"))
app.get("/ping", (req, res) => res.send ("pong"));

app.listen(4000, () => console.log("servidor corriendo en http://localhost:4000"));