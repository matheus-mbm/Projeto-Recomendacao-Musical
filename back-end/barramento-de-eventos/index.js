const expres = require('express');
const axios = require('axios')
const bodyParser = require('body-parser');

const app = expres();
app.use(bodyParser.json());

app.post('/eventos', (req, res) =>{
    const evento = req.body;
    axios.post('https://localhost:4000/eventos', evento);
    axios.post('https://localhost:5000/eventos', evento);
    res.send(200).send({msg:"ok"});
});

app.listen(10000, () => {
    console.log('Servidor correndo en puerto 10000')
})