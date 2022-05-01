const conexao = require('../infraestrutura/conexao');

class Pets {
    adiciona (pet, res){
        const sql = "INSERT INTO pets SET ?";
        conexao.query(sql, pet, erro => {
            if (erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(pet);
            }
        })
    }

    listar (res){
        const sql = "SELECT * FROM pets";
        conexao.query(sql, (erro, resultado) => {
            if (erro){
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultado);
            }
        })
    }
}

module.exports = new Pets();