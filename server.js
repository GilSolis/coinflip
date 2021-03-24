const express = require('express');
const app = express();

app.listen(5000, function () {
    console.log('listening on 5000')
})

app.get('/coinflip', (req, res) => {
    // res.sendFile(__dirname + '/js/main.js')
    let headsOrTails = Math.ceil(Math.random() * 2)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const objToJson = {
        value: `${headsOrTails}`
    }
    res.end(JSON.stringify(objToJson))
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})

// app.get('/coinflip', (req, res) => {
//     // res.sendFile(__dirname + '/js/main.js')
//     let headsOrTails = Math.ceil(Math.random() * 2)
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     const objToJson = {
//         value: `${headsOrTails}`
//     }
//     res.end(JSON.stringify(objToJson))
// })

app.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + '/js/main.js')
})

app.get('/css/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css')
})
app.get('/img/heads.png', (req, res) => {
    res.sendFile(__dirname + '/img/heads.png')
})
