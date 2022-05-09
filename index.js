const express = require('express');
const app = express();
const port = 8000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send('Hello World! thomas')
})

app.get('/users', (req, res) => {
    res.send([
        {firstNmae: "thomas", lastName: "james"},
        {firstNmae: "john", lastName: "bond"}
    ])
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
