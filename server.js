const express = require('express');
const app = express();
// const MongoClient = require('mongodb').MongoClient

app.listen(5000, function () {
    console.log('listening on 5000')
})
// let connectionString = 'mongodb+srv://Admin2:password@123@cluster0.tgqse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// MongoClient.connect(connectionString, (err, client) => {
//     console.log('Connected to Database')
//     const db = client.db('coinflipDB')
//     const quotesCollection = db.collection('coinflipResults')
// app.get('/', (req, res) => {
//     db.collection('coinflipDB').find.toArray()
//         .then(results => {

//         })
// })
app.get('/coinflip', (req, res) => {
    // res.sendFile(__dirname + '/js/main.js')
    let headsOrTails = Math.ceil(Math.random() * 2)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const objToJson = {
        value: `${headsOrTails}`
    }
    res.end(JSON.stringify(objToJson))
})
// app.put('/addResult', (res, req) => {
//     console.log('adding one')
//     // res.end('Success')
// })
// })

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
