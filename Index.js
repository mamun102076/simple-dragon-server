const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const category = require('./Data/categories.json')

app.get('/', (req,res)=> {
    res.send('news api running')
})

app.get('/news-categories',(req,res)=> {
    res.send(category)
})

app.listen(port, () => {
    console.log('simple dragon running On',port)
})