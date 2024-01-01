const express = require('express') // imported express from node modules
const app = express()

// to run: node hw-part-one/server.js
// to stop: ^C

// GREETING 

app.get('/greeting', (req, res)=> {
    res.send('Hello, stranger.')
}) 
// http://localhost:3000/greeting/ => Display: Hello, stranger. 

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello there, ${req.params.name}`)
})
// http://localhost:3000/greeting/:name ( name =>
// http://localhost:3000/greeting/Jimmy-boy )

// TIP CALCULATOR

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`${req.params.total * req.params.tipPercentage * 0.01}`)
  })

// http://localhost:3000/tip/:total/:tipPercentage ( 
//    http://localhost:3000/tip/100/20 => Display: 20 )

app.listen(3000, () => {
    console.log("I'm Ready")
})
// display in browser: http://localhost:3000/
