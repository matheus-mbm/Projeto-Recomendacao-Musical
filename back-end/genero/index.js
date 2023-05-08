const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');
const id = 'a7a11dc3cf541a7c6535c4d9b370fe2b'
const genero = {}

app.use(bodyParser.json())
app.use(cors({ origin: '*' }));
app.use(express.json());

contador = 0;

async function apiDataGenero(cantor){
   try{
      const response = await axios.get(`https://api.deezer.com/search?q=${cantor}`);
      return response.data;
   }
   catch(error){
      console.log(error)
   }
}

app.get('/genero/:cantor', async (req, res) => {
   const cantor = req.params.cantor;
   res.send(await apiDataGenero(cantor));
 });

app.post('/genero', (req, res) =>{
   contador++
   const { texto } = req.body;
   genero[contador] = {
     contador, texto
   }
   res.status(201).send(genero[contador])
})

module.exports = {
   apiDataGenero,
};

app.listen(4000, () =>{
   console.log('Genero. Porta 4000')
})
