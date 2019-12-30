const express = require('express')
const next = require('next')
var http = require('http');
var request = require('request');
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const bodyParser = require("body-parser");
    
app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());

  server.get('/product/:id', (req, res) => {
    const actualPage = `/product/${req.params.id}`
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/category/:id', (req, res) => {
    const actualPage = `/category/${req.params.id}`
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  // server.get('/api/', (req, res) => {
  //   request('https://api.punkapi.com/v2/beers', function (error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       res.send(body)
  //     }
  //   })
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})