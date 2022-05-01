const fs = require("fs");

const path = "./assets/salsisha.jpg";

//Leitura de forma sincrona

    // fs.readFile(path, (erro, buffer) => {
    //  console.log("imagem buferizada com sucesso");
    //  fs.writeFile("./assets/salsisha1.jpg", buffer, erro => {
    //      console.log("imagem copiada com sucesso");
    //  });    
    // });

// Leitura e escrita de forma assincrona

fs.createReadStream(path)
    .pipe(fs.createWriteStream("./assets/salsicha_stream.jpg"))
    .on("finish", () => console.log("imagem criada com sucesso"));