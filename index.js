const customExpress = require('./config/customExpress');

const app = customExpress();

const conexao = require('./infraestrutura/conexao');

conexao.connect((erro) => {
    if (erro){
        console.log(erro);
    }else{
        console.log("Conectado com Sucesso!");        
        app.listen(3000, () => console.log('Servidor Rodando na porta 3000'));
    }
});



