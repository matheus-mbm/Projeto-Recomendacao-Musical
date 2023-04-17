const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const recomendacaoPorGeneroId = {}
app.use(bodyParser.json())

app.post('/genero/:id/recomendacao', (req, res) => {

})

app.get('/genero/:id/recomendacao', (req, res) => {

})

app.listen(5000, (() => {
    console.log('Porta. 5000')
}))