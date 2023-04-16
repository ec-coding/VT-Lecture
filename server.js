const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(5050, function () {
    console.log('listening on 5050')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
    console.log(__dirname)
})

app.get('/set-base', (req, res) => {
    res.sendFile(__dirname + '/src/set-base.html')
    console.log(__dirname)
})

app.get('/set-jungle', (req, res) => {
    res.sendFile(__dirname + '/src/set-jungle.html')
    console.log(__dirname)
})

app.get('/set-fossil', (req, res) => {
    res.sendFile(__dirname + '/src/set-fossil.html')
    console.log(__dirname)
})

app.get('/set-base-2', (req, res) => {
    res.sendFile(__dirname + '/src/set-base-2.html')
    console.log(__dirname)
})

app.get('/set-team-rocket', (req, res) => {
    res.sendFile(__dirname + '/src/set-team-rocket.html')
    console.log(__dirname)
})

app.get('/set-gym-heroes', (req, res) => {
    res.sendFile(__dirname + '/src/set-gym-heroes.html')
    console.log(__dirname)
})

app.get('/set-gym-challenge', (req, res) => {
    res.sendFile(__dirname + '/src/set-gym-challenge.html')
    console.log(__dirname)
})

app.get('/set-neo-genesis', (req, res) => {
    res.sendFile(__dirname + '/src/set-neo-genesis.html')
    console.log(__dirname)
})

app.get('/set-neo-discovery', (req, res) => {
    res.sendFile(__dirname + '/src/set-neo-discovery.html')
    console.log(__dirname)
})

app.get('/set-neo-revelation', (req, res) => {
    res.sendFile(__dirname + '/src/set-neo-revelation.html')
    console.log(__dirname)
})

app.get('/set-neo-destiny', (req, res) => {
    res.sendFile(__dirname + '/src/set-neo-destiny.html')
    console.log(__dirname)
})

app.get('/card-display', (req, res) => {
    res.sendFile(__dirname + '/src/card-display.html')
    console.log(__dirname)
})

app.get('/vader1', (req, res) => {
    res.sendFile(__dirname + '/src/vader1.html')
    console.log(__dirname)
})

app.get('/vader2', (req, res) => {
    res.sendFile(__dirname + '/src/vader2.html')
    console.log(__dirname)
})