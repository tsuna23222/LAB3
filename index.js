const express = require('express');
const app = express();
const port = 3000;

// 1. Middleware FIRST
app.use(express.json());
app.use(express.static('public'));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// 2. Routes in the MIDDLE
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});

// 3. Start server LAST
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});