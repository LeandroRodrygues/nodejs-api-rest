class Tabelas {
    init (conexao){
        this.conexao = conexao;
        this.criarAtendimentos();
        this.criarPets();
    }

    criarAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))';

        this.conexao.query(sql, erro => {
            if (erro){
                console.log(erro);
            }else {
                console.log('Tabela atendimentos criada com sucesso');
            }
        })
    }

    criarPets(){
        const sql = "CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome varchar (50) NOT NULL, imagem varchar (200) NOT NULL, PRIMARY KEY (id))" 

        this.conexao.query(sql, erro => {
            if (erro){
                console.log(erro);
            } else {
                console.log("Tabela Pets criada com sucesso");
            }
        })
    }

}

module.exports = new Tabelas;