const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())
const catagories=require('./data/catagorys.json')
const news=require("./data/news.json")
app.get('/', (req, res) => {
    res.send('my news server')
  })
app.get('/categories',(req,res)=>{
    res.send(catagories)
})  

app.get('/news',(req,res)=>{
  res.send(news)
})

app.get('/news/:id',(req,res)=>{
  const id=req.params.id
  console.log(id)
  const selectNews= news.find(n => n._id === id)
  res.send(selectNews)
})

app.get('/categories/:id',(req,res)=>{
  const id=req.params.id
  console.log(id)
if(id == 0){
  res.send(news)
}
else{
  const catagorysNews=news.filter(n => n.category_id === id)
  res.send(catagorysNews)
}
})
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })