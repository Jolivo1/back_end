const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send("Hola mundo")
})

app.post('/', (req, res) => {
    res.send('Hello World two!')
  })
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })