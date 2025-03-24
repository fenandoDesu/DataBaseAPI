const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./models/database')

connection
    .authenticate()
    .then(() => {
          console.log('sucesso')
    })
    .catch((msgerror) => {
        console.log('msgerror')
    })

app.listen(8080, ()=>{
    console.log('api rodando')
})