import { translate } from './models/api.js'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())

app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
))

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/translate', async (req, res) => {

    const textEN = req.body["text"];
    const textPB = await translate(textEN);

    res.send(textPB);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})