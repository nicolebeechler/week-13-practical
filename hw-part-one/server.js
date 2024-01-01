const express = require('express') // imported express from node modules
const app = express()

// to run: node hw-part-one/server.js
// to stop: ^C

app.get('/greeting', (req, res)=> {
    res.send('Hello, stranger.')
}) 
// http://localhost:3000/greeting/ => Output: Hello, stranger. 

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello there, ${req.params.name}`)
})
// http://localhost:3000/greeting/:name ( name =>
// http://localhost:3000/greeting/Jimmy-boy )

app.listen(3000, () => {
    console.log("I'm Ready")
})
// display in browser: http://localhost:3000/
