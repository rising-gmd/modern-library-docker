const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const path = require('path')
const dbURL = 'mongodb+srv://gmd:gmd@cluster0.gutv6.mongodb.net/digitalLibrary?retryWrites=true&w=majority'
const userRouter = require('./Routes/user')
const { PORT = 4000 } = process.env

app.use(cors())
app.use(express.json())
app.use(express.static('dist'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
})

app.use('/', userRouter)
mongoose.connect(dbURL)

app.listen(PORT, () => {
    console.log('server listening on port 4000')
})


  // "engines": {
  //   "node": ">=15.0.0",
  //   "npm": "<=5.0.0"
  // }

//   "engines": {
//     "node": "^18.0.0"
//   },

//   "scripts": {
//     "start": "node app.js"
//   }