const express = require('express') // imported express from node modules
const app = express()

// to run: node pass-it-around/server.js
// to stop: ^C

let bottles = 99

app.get('/', (req, res) => {
    res.send(`<h1 style="text-align: center; font-family: Helvetica, sans-serif;">99 bottles of beer on the wall.</h1> 
    <h2 style="text-align: center; font-family: Helvetica, sans-serif;"><a href="/98">Take one down, pass it around.</a></h2>`)
})

app.get("/:number_of_bottles", (req, res) => {
    const numBottles = parseInt(req.params.number_of_bottles)

    if (numBottles === 0) {
        res.send(`<h1 style="text-align: center; font-family: Helvetica, sans-serif;">No more bottles of beer on the wall, no more bottles of beer.</h1>
        <h2 style="text-align: center; font-family: Helvetica, sans-serif;">Go to the store and buy some more, 99 bottles of beer on the wall.</h2>
        <h2 style="text-align: center; font-family: Helvetica, sans-serif;"><a href="/">Start Over</a></h2>`)
    } else {
        res.send(`<h1 style="text-align: center; font-family: Helvetica, sans-serif;">${numBottles} bottles of beer on the wall, ${numBottles} bottles of beer. </h1>
        <h2 style="text-align: center; font-family: Helvetica, sans-serif;">Take one down and pass it around, <a href="/${numBottles - 1}">${numBottles - 1} bottles of beer on the wall.</a></h2>`)
    }
})

app.listen(3000, () => {
    console.log("I'm Ready")
})

// display in browser: http://localhost:3000/
// /:number_of_bottles will count down with every click, or enter your own number