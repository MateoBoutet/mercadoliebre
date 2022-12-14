const express = require("express");

const path = require("path");

const app = express();

app.use(express.static("./public"));

const port = process.env.PORT 
app.listen(3000, () => console.log(`Servidor levantado en el puerto http://localhost:${port}`));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/crea-tu-cuenta", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/creaTuCuenta.html"))
})

app.get("/ingresa", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/ingresa.html"))
})