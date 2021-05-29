
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('HelloWorld');
});

app.get('/hello', (req, res) => {
    res.send("Hello World from 'GET'");
});

app.post('/hello', (req, res) => {
    res.send("Hello World from 'POST'");
});

app.get('/me', (req, res) => {
    res.send(req.query.name);
});

app.get('/me/:id', (req, res) => {
    res.send(req.params.id);
});

app.get('/me/hello', (req, res) => {
    res.send(`Hello ${req.query.name}!`);
});

app.get('/me/hello/:id', (req, res) => {
    res.send(`Hello ${req.params.id}!` );
});

const port = process.env.PORT || 7050;
app.listen(port, () => console.log(`Listening on port ${port}...`));