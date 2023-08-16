const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())
const catagories=require('./data/catagorys.json')
app.get('/', (req, res) => {
    res.send('my news server')
  })
app.get('/categories',(req,res)=>{
    res.send(catagories)
})  

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })