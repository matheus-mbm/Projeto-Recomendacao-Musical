const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const genero = {}
app.use(bodyParser.json())
 
contador = 0;

app.get('/genero', (req, res) =>{
   res.send(genero)
})

app.post('/genero', (req, res) =>{
   contador++
   const { texto } = req.body;
   genero[contador] = {
     contador, texto
   }
   res.status(201).send(genero[contador])
})

app.listen(4000, () =>{
    console.log('Genero. Porta 4000')
})