const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (_req, res) => res.send('Você está realizando um GET'));
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
        
    });
}
