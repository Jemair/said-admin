#!/usr/bin/env node

const http = require('http')
const express = require('express')
const colors = require('colors')
const routers = require('./router')
const port = 4002
const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type,accept')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  next()
})

app.use('/back', routers)

const server = http.createServer(app)

colors.setTheme({
  info: 'green',
  warn: 'yellow',
  error: 'red',
  bold: 'bold'
})

server.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(
    '[MOCK SERVER START]'.info.bold
    + ` Listening at http://localhost:${port}\n`
  )
})
