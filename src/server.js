const port = 3003
 
const express = require('express')
const app = express()

app.get('./produtos', (req, res, next) =>{
    //sendo converte pra JSON
    res.send({nome: 'Celular', preco: 1380.90})
})
