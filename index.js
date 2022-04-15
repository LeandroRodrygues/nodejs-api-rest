const customExpress = require('./config/customExpress');

const app = customExpress();

const conexao = require('./infraestrutura/conexao');

const Tabelas = require('./infraestrutura/tabelas');

conexao.connect((erro) => {
    if (erro){
        console.log(erro);
    }else{
        console.log("Conectado com Sucesso!");
        Tabelas.init(conexao);
        app.listen(3000, () => console.log('Servidor Rodando na porta 3000'));
    }
});



