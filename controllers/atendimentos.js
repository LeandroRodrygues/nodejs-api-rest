module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está realizando um GET'));
    app.post('/atendimentos', (req, res) => res.send('Você está realizando um POST'));
}