const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended:true})) // what it does ?
app.set('view engine','ejs')

const languageArray = []

app.get('/', (req, res) => {
  res.render("index",{serverData:languageArray})
})

app.get('/contact', (req, res) => {
  res.render("contact",{})
})

app.post('/', (req, res) => {
  const pLanguage = req.body.uiLanguage;
  
  languageArray.push(pLanguage);
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})