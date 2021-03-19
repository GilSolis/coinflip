const express = require('express');
const app = express();

app.listen(5000, function () {
    console.log('listening on 5000')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')

})

app.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + '/js/main.js')
})

