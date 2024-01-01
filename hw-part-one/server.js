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

// MAGIC 8 BALL

app.get('/magic/:question', (req, res) => {

    const answers = [
        "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
        "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
        "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
        "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
        "Don't count on it", "My reply is no", "My sources say no",
        "Outlook not so good", "Very doubtful"
    ]
    
    const question = req.params.question.replace(/%20/g, ' ');
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

    res.send(`
        <h2>Your Question: ${question}</h2>
        <h1>Magic 8 Ball says: ${randomAnswer}</h1>
    `)
})

// http://localhost:3000/magic/:question
// http://localhost:3000/magic/Will%20I%20Be%20A%20Millionaire ( Display: Question & Random Answer )

app.listen(3000, () => {
    console.log("I'm Ready")
})
// display in browser: http://localhost:3000/
