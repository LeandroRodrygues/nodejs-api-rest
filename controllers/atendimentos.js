const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (_req, res) => {
        Atendimento.listar(res);

    });
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.buscaId(id, res);
    });
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento, res);
        
    });app.patch('/atendimentos/:id', (req, res) => {
        const valores = req.body;
        const id = parseInt(req.params.id);
        Atendimento.altera(id, valores, res);
    });
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.deleta(id, res);
    });
}
