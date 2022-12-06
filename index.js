const express = require("express")


const app = express()

const port = process.env.PORT || 5000

app.get('/',  (req,res) => {
  res.send('hello from express server')
})

app.listen(port, () => {
  console.log(`the server is running on ${port}`);
})