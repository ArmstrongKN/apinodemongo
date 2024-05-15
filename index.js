const express = require ('express');
const mongoose = require ('mongoose');

//Criar um app
const app = express();

//Configurar a nossa API para ler json
app.use(express.urlencoded({

    extended: true,
}))

app.use(express.json());

//Conexão com o banco
let url = "mongodb://localhost:27017"
mongoose.connect(url).then(()=>{
    console.log("Conectamos no Banco!")
    app.get('/', (rep, res)=>{
        res.json({message: "Olá, mundo!"});
    })
})



app.listen(3000);