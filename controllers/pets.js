const Pets = require("../models/pets");

module.exports = (app) => {
    app.post("/pets", (req, res) => {
        const pet = req.body;
        Pets.adiciona(pet, res);
    });

    app.get("/pets", (_req, res) => {
        Pets.listar(res);
    })
}