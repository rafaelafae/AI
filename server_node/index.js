
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/translate', (req, res) => {
    res.send({ "tranlated_text": "Legenda traduzida" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});