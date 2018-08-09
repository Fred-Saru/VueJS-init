const port = process.env.PORT || 3000;
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/ex/:exId', (req, res) => {
    res.sendFile(path.join(__dirname + `/views/exercises/ex${req.params.exId}.html`));
});

app.get('/playground', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/playground.html'));
});

app.listen(port, (err) => {
    if(err) {
        console.error(err);
    }

    console.log(`Server is listening to port ${port}`);
});