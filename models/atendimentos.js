const conexao = require('../infraestrutura/conexao');

const moment = require('moment');

class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const dataValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteValido = atendimento.cliente.length >= 5;
        const validacoes = [
            {
                nome: 'cliente',
                valido: clienteValido,
                mensagem: 'Cliente deve ter no mínimo 5 caracteres!'
            },
            {
                nome: 'data',
                valido: dataValida,
                mensagem: 'Data deve ser maior ou igual a data de criação'
            }
        ]
        const erros = validacoes.filter(campo => !campo.valido);
        const existeErros = erros.length;
        if (existeErros){
            res.status(400).json(erros);
        }else{
            const atendimentoDatado = {...atendimento, dataCriacao, data};
            const sql = 'INSERT INTO Atendimentos SET ?';
            conexao.query(sql, atendimentoDatado, (erro, resultado) => {
                if (erro) {
                    res.status(400).json(erro);
                } else {
                    res.status(201).json(resultado);
                }                
            })            
        }
        
    }
    listar(res){
        const sql = 'SELECT * FROM Atendimentos';
        conexao.query(sql, (erro, resultado) => {
            if (erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        })
    }
    buscaId(id, res){
        const sql = 'SELECT * FROM Atendimentos WHERE id = ?';
        conexao.query(sql, id, (erro, resultado) => {
            const atendimento = resultado[0];
            if (erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(atendimento);
            }
        })
    }
    altera(id, valores, res){
        if (valores.data){
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id = ?';
        conexao.query(sql, [valores, id], (erro, resultado) => {
            if (erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(resultado);
            }
        });
    }    
}

module.exports = new Atendimento;